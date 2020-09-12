import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { groupes } from "./constants";
import { Loader } from "./components/Loader";
import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";
import { Navigation } from "./components/Navigation";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
`;

const Main = styled.main`
  overflow: scroll;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100vw, 1fr));
  padding: 3rem 0 0 0;
  position: relative;

  h2 {
    position: absolute;
    font-size: 1.1rem;
    height: 3rem;
    font-weight: bold;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 1rem;
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(100vw, 1fr));
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(calc(100vw / 2), 1fr));
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(calc(100vw / 3), 1fr));
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    grid-template-columns: repeat(auto-fill, minmax(calc(100vw / 4), 1fr));
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(calc(100vw / 5), 1fr));
  }
`;

const lastYear = new Date();
lastYear.setMonth(0);
lastYear.setDate(1);
lastYear.setHours(0, 0, 0, 0);

function App() {
  const [loading, setLoading] = useState(true);
  const [submissions, setSubmissions] = useState({});
  const [selected, setSelected] = useState(
    localStorage.getItem("bev-selection") || "all"
  );

  useEffect(() => {
    (async () => {
      const request = await fetch(
        process.env.NODE_ENV === "production"
          ? "https://cors-anywhere.herokuapp.com/http://www.bellevillenvrai.fr/api/forms"
          : "/api/forms"
      );
      const response = await request.json();
      const data = response.data
        .map((submission) => {
          const form_data = JSON.parse(submission.form_data);
          if (form_data.joueurs) {
            const joueurs = JSON.parse(form_data.joueurs);
            form_data.joueurs = joueurs.sort((a, b) =>
              a.capitaine < b.capitaine || a.vice_capitaine < b.vice_capitaine
                ? 1
                : -1
            );
          }
          return {
            ...submission,
            form_data,
          };
        })
        .sort((a, b) =>
          a.form_data.nom.trim().charAt(0).toLowerCase() >
          b.form_data.nom.trim().charAt(0).toLowerCase()
            ? 1
            : -1
        )
        .filter((item) =>
          process.env.NODE_ENV === "production"
            ? new Date(item.created_at) >= lastYear
            : true
        );

      let itemsPerGroup = [];
      groupes.forEach(
        (groupe) =>
          (itemsPerGroup[groupe.key] = data.filter(
            (sub) => sub.group === groupe.name
          ))
      );

      setSubmissions({ all: data, ...itemsPerGroup });
      setLoading(false);
    })();
  }, [setSubmissions, setLoading]);

  const handleChange = useCallback(
    (value) => {
      setSelected(value);
      localStorage.setItem("bev-selection", value);
    },
    [setSelected]
  );

  if (loading) return <Loader />;

  return (
    <Container>
      <Navbar onChange={handleChange} selected={selected} />
      <Main>
        <h2>
          Il y a{` ${submissions[selected].length} `}
          personnes inscrites pour l'année
          {` ${lastYear.getFullYear()}`}.
        </h2>
        {submissions[selected].map((submission, key) => {
          return (
            <Card key={key} {...submission} displayGroup={selected === "all"} />
          );
        })}
      </Main>
      <Navigation />
    </Container>
  );
}

export default App;
