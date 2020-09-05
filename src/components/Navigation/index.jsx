import React from "react";
import styled from "styled-components";
import { ALPHABET } from "../../constants";

const Container = styled.div`
  position: absolute;
  top: max(10vh, 60px);
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
  font-size: 2vh;

  @media screen and (orientation: landscape) {
    & {
      font-size: 2vw;
    }
  }
`;

export const Navigation = () => {
  return (
    <Container>
      {ALPHABET.map((letter) => {
        return (
          <Item
            key={letter}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById(
                `data-navigation-${letter}`
              );
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {letter}
          </Item>
        );
      })}
    </Container>
  );
};
