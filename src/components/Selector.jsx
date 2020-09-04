import React from "react";
import { groupes } from "../constants";
import styled from "styled-components";

const Container = styled.div`
  @media (min-width: 480px) {
    & {
      padding: 1rem;
    }
  }
`;

export const Selector = ({ handleChange, selected }) => {
  return (
    <>
      <Container>
        <input
          type="radio"
          name="selection"
          id="all"
          value="all"
          onChange={handleChange}
          checked={selected === "all"}
        />
        <label htmlFor="all">Tout</label>
      </Container>
      {groupes.map((groupe) => (
        <Container key={groupe.key}>
          <input
            type="radio"
            name="selection"
            id={groupe.name}
            value={groupe.key}
            onChange={handleChange}
            checked={selected === groupe.key}
          />
          <label htmlFor={groupe.name}>{groupe.name}</label>
        </Container>
      ))}
    </>
  );
};
