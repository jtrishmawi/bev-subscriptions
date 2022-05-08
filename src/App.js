import styled from "styled-components";
import React from "react";
import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";
import { Navigation } from "./components/Navigation";
import { useData, withData } from "./state";
import { Loader } from "./components/Loader";

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
  grid-template-rows: auto 1fr;
  position: relative;

  h2 {
    position: sticky;
    background: rgba(255, 255, 255, 0.5);
    top: 0;
    font-size: 1.1rem;
    height: 3rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(100vw, 1fr));
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(calc(100vw / 2), 1fr));
    h2 {
      grid-column: 1 / 3;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(calc(100vw / 3), 1fr));
    h2 {
      grid-column: 1 / 4;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    grid-template-columns: repeat(auto-fill, minmax(calc(100vw / 4), 1fr));
    h2 {
      grid-column: 1 / 5;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(calc(100vw / 5), 1fr));
    h2 {
      grid-column: 1 / 6;
    }
  }
`;

function App() {
  const [state] = useData();

  if (!state.selected_submissions || !state.selected_submissions.length) return <Loader />;

  let headerText = `Il y a ${state.selected_submissions.length} inscriptions`;
  if (state.search.length > 3) {
    headerText = `Il y a ${
      state.selected_submissions.length
    } inscriptions visibles sur ${state.submissions[state.selected].length}`;
  }
  if (state.selected !== "all") {
    headerText += ` dans le groupe ${
      state.selected.charAt(0).toUpperCase() + state.selected.slice(1)
    }`;
  }
  headerText += ` pour l'année ${state.lastYear.getFullYear()}.`;

  return (
    <Container>
      <Navbar />
      <Main>
        <h2>{headerText}</h2>
        {state.selected_submissions.map((submission, key) => {
          return (
            <Card
              key={key}
              {...submission}
              displayGroup={state.selected === "all"}
            />
          );
        })}
      </Main>
      <Navigation />
    </Container>
  );
}

export default withData(App);
