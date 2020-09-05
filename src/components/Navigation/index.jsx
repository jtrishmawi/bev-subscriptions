import React from "react";
import styled from "styled-components";
import { ALPHABET } from "../../constants";

const Container = styled.div`
  position: absolute;
  top: min(10vh, 70px);
  bottom: 0;
  right: 0;
  background: #abcdef;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (orientation: landscape) {
    & {
      flex-direction: row;
      left: 0;
      top: unset;
    }
  }
`;

const Item = styled.a`
  padding: 0.25rem;
  text-decoration: none;
  outline: none;
  color: inherit;
`;

export const Navigation = () => {
  return (
    <Container>
      {ALPHABET.map((letter) => (
        <Item key={letter} href={`#data-navigation-${letter}`}>
          {letter}
        </Item>
      ))}
    </Container>
  );
};
