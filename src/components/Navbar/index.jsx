import React, { useState, useCallback } from "react";
import { Links } from "./Links";
import { useData } from "../../state";
import useDeviceDetect from "../../utils/useDeviceDetect";
import { Search } from "../Search";
import { Navigation } from "./Navigation";
import { Toggle } from "./Toggle";
import { Navbox } from "./Navbox";
import { Hamburger } from "./Hamburger";

export const Navbar = () => {
  const [, { setSelected }] = useData();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { isMobile } = useDeviceDetect();

  const handleChange = useCallback(
    (value) => {
      setNavbarOpen((navbarOpen) => (navbarOpen ? !navbarOpen : false));
      setSelected(value);
    },
    [setSelected, setNavbarOpen]
  );

  return (
    <Navigation>
      <Toggle onClick={() => setNavbarOpen(!navbarOpen)}>
        <Hamburger open={navbarOpen} />
      </Toggle>
      <Navbox open={navbarOpen}>
        {isMobile && <Search setNavbarOpen={setNavbarOpen} />}
        <Links handleChange={handleChange} />
        {!isMobile && <Search setNavbarOpen={setNavbarOpen} />}
      </Navbox>
    </Navigation>
  );
};
