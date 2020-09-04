import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Loader } from "./components/Loader";
import { Selector } from "./components/Selector";
import { groupes } from "./constants";
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
  grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));

  & > article {
    min-height: 240px;
  }
`;

function App() {
  const [loading, setLoading] = useState(true);
  const [submissions, setSubmissions] = useState({});
  const [selected, setSelected] = useState(
    localStorage.getItem("bev-selection") || "all"
  );

  useEffect(() => {
    (async () => {
      const request = await fetch("/api/forms");
      const response = await request.json();
      const data = response.data.map((submission) => {
        const form_data = JSON.parse(submission.form_data);
        submission = {
          ...submission,
          form_data: {
            ...form_data,
            nom: `${form_data.nom.toUpperCase()} ${form_data.prenom}`,
          },
        };
        delete submission.form_data.prenom;
        return submission;
      });
      let itemsPerGroup = data.reduce((acc, item) => {
        groupes.forEach((groupe) => {
          acc[groupe] = data.filter((sub) => sub.group === groupe);
        });
        return acc;
      }, []);
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
