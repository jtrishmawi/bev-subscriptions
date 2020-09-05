import React from "react";
import styled from "styled-components";
import { groupes } from "../../constants";

const NavItem = styled.button`
  border: none;
  outline: none;
  background: transparent;
  color: #333;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  font-size: 1.25rem;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #333;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #333;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`;

export const Links = ({ handleChange }) => {
  return (
    <>
      <NavItem onClick={() => handleChange("all")}>Tous</NavItem>
      {groupes.map((groupe) => (
        <NavItem key={groupe.key} onClick={() => handleChange(groupe.key)}>
          {groupe.name}
        </NavItem>
      ))}
    </>
  );
};
