import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { groupes } from "./constants";
import { Loader } from "./components/Loader";
import { Selector } from "./components/Selector";
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
`;

const Main = styled.main`
  overflow: scroll;
  display: grid;

  h2 {
    grid-column: 1/3;
    font-size: 1.1rem;
    font-weight: bold;
    text-align: center;
    padding: 1rem;
    height: 1.1rem;
    line-height: 1.1rem;
  }
  
  @media (min-width: 480px) {
    & {
      grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
    }
  }
`;

const lastYear = new Date();
lastYear.setMonth(0)
lastYear.setDate(1)
lastYear.setHours(0, 0, 0, 0);

function App() {
  const [loading, setLoading] = useState(true);
  const [submissions, setSubmissions] = useState({});
  const [selected, setSelected] = useState(
    localStorage.getItem("bev-selection") || "all"
  );

  useEffect(() => {
    (async () => {
      const request = await fetch(process.env.NODE_ENV ===  "production" ? "http://www.bellevillenvrai.fr/api/forms" : "/api/forms");
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
        .filter((item) => new Date(item.created_at) >= lastYear);

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

  const handleChange = (e) => {
    setSelected(e.target.value);
    localStorage.setItem("bev-selection", e.target.value);
  };

  if (loading) return <Loader />;

  return (
    <Container>
      <Header>
        <Selector handleChange={handleChange} selected={selected} />
      </Header>
      <Main>
      <h2>Il y a {submissions[selected].length} inscris pour l'année {lastYear.getFullYear()}</h2>
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
