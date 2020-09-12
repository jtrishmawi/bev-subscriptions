import React from "react";
import styled from "styled-components";
import { CardBody } from "./CardBody";
import { CardFooter } from "./CardFooter";

const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid #f8f9fa;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);

  a {
    color: #333;
    border: 1px solid #333;
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius: 50%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #f8f9fa;
  padding: 1rem 0.5rem;

  h3 {
    font-weight: bold;
  }
`;

const Placeholder = styled.div`
  display: none;
`;

let previousLetter;

export const Card = ({ displayGroup, group, form_data, created_at }) => {
  // console.log({ displayGroup, group, form_data, created_at });

  let currentLetter = form_data.nom.charAt(0).toUpperCase();
  let navigationId;
  let placeholders = [];
  if (currentLetter !== previousLetter) {
    if (previousLetter) {
      for (
        let i = previousLetter.charCodeAt() + 1;
        i < currentLetter.charCodeAt();
        i++
      ) {
        placeholders = [
          ...placeholders,
          <Placeholder
            key={i}
            id={`data-navigation-${String.fromCharCode(i)}`}
          />,
        ];
      }
    }
    navigationId = `data-navigation-${currentLetter}`;
    previousLetter = currentLetter;
  }

  return (
    <>
      {placeholders}
      <Container id={navigationId}>
        <Header>
          <h3>{`${form_data.nom.toUpperCase()} ${form_data.prenom || ""}`}</h3>
          {displayGroup && <p role="doc-subtitle">{group}</p>}
        </Header>
        <CardBody form_data={form_data} group={group} created_at={created_at} />
        <CardFooter form_data={form_data} />
      </Container>
    </>
  );
};
