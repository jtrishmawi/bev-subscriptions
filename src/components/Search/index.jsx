import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useData } from "../../state";
import { useDebounce } from "../../utils/useDebounce";

const Form = styled.form`
  flex: 0 1 auto;
  display: grid;
  place-items: center;
  position: relative;
`;

const Input = styled.input`
  height: max(6vh, 50px);
  border: 0;
  color: #333;
  font-size: 1.25rem;
  padding: 0 1.6rem;
  border-radius: 0.7rem;
  width: 15ch;
  appearance: none;
  transition: all 0.3s cubic-bezier(0, 0, 0.43, 1.49);
  transition-property: width, border-radius;
  z-index: 1;
  position: relative;

  &&:not(:placeholder-shown) {
    border-radius: 0.5rem 0 0 0.7rem;
    width: calc(100% - 8ch);
    + button {
      display: block;
    }
  }
`;

const Button = styled.button`
  height: max(6vh, 50px);
  border: 0;
  color: #333;
  font-size: 1.25rem;
  display: none; // prevent being able to tab to it
  position: absolute;
  top: 0;
  right: 0;
  width: 4ch;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 0 0.7rem 0.7rem 0;
`;

export const Search = ({ setNavbarOpen }) => {
  const [{ search }, { setSearch }] = useData();

  const [searchTerm, setSearchTerm] = useState(search);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        console.log({ debouncedSearchTerm });
        setSearch(debouncedSearchTerm);
      } else {
        setSearch("");
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [debouncedSearchTerm]
  );

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        setSearchTerm(e.target.search.value);
        setNavbarOpen((navbarOpen) => !navbarOpen);
      }}
      role="search"
    >
      <Input
        name="search"
        type="search"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Recherche"
      />
      <Button type="submit">Go</Button>
    </Form>
  );
};
