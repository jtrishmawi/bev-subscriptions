import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { groupes } from "./constants";
import { Loader } from "./components/Loader";
import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
`;

const Header = styled.header`
  height: 70px;
  max-height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #f8f9fa;
  text-transform: capitalize;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;

  @media (max-width: 768px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`;

const Main = styled.main`
  overflow: scroll;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
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
  }

  @media (max-width: 480px) {
    & {
      grid-template-columns: repeat(auto-fit, minmax(100vw, 1fr));
    }
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
        .sort(function (a, b) {
          return new Date(b.created_at) - new Date(a.created_at);
        })
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
      <Header>
        <Navbar onChange={handleChange} />
      </Header>
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
    </Container>
  );
}

export default App;
