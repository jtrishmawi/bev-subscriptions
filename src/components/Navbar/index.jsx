import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { Links } from "./Links";

const Navigation = styled.nav`
  height: 70px;
  max-height: 10vh;
  width: 100%;
  display: flex;
  background: #f8f9fa;
  position: relative;
  text-transform: capitalize;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;

  @media (max-width: 480px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`;

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 480px) {
    display: flex;
  }
`;

const Navbox = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #f8f9fa;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${(props) => (props.open ? "-100%" : "0")};
  }
`;

const Hamburger = styled.div`
  background-color: #333;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${(props) => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #333;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${(props) =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${(props) => (props.open ? "0" : "1")};
    transform: ${(props) => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`;

export const Navbar = ({ onChange }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleChange = useCallback(
    (value) => {
      setNavbarOpen(navbarOpen => navbarOpen ? !navbarOpen : false);
      onChange(value);
    },
    [onChange, setNavbarOpen]
  );

  return (
    <Navigation>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <Links handleChange={handleChange} />
        </Navbox>
      ) : (
        <Navbox open>
          <Links handleChange={handleChange} />
        </Navbox>
      )}
    </Navigation>
  );
};
