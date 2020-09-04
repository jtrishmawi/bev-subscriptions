import React from "react";
import { groupes } from "../constants";

export const Selector = ({ handleChange, selected }) => {
  return (
    <>
    <div style={{padding: '1rem'}}>
          <input
            type="radio"
            name="selection"
            id="all"
            value="all"
            onChange={handleChange}
            checked={selected === 'all'}
          />
          <label htmlFor="all">Tout</label>
        </div>
      {groupes.map((groupe) => (
        <div key={groupe} style={{padding: '1rem'}}>
          <input
            type="radio"
            name="selection"
            id={groupe}
            value={groupe}
            onChange={handleChange}
            checked={selected === groupe}
          />
          <label htmlFor={groupe}>{groupe}</label>
        </div>
      ))}
    </>
  );
};
