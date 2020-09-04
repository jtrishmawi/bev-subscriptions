import React from "react";
import styled from "styled-components";

const Container = styled.article`
  padding: 1rem;

  span {
    font-weight: bold;
  }
`;

export const Card = ({ displayGroup, group, form_data, created_at }) => {
  //   console.log({ displayGroup, group, form_data, created_at });
  return (
    <Container>
      {displayGroup && (
        <div>
          <span>Groupe</span>: {group}
        </div>
      )}
      {Object.entries(form_data).map(([key, value]) => {
        key = key.charAt(0).toUpperCase() + key.slice(1)
        if (key === "joueurs") {
          return (
            <div key={key}>
              <span>{key}</span>:
              <pre>
                <code>{JSON.stringify(value, null, 2)}</code>
              </pre>
            </div>
          );
        }
        return (
          <div key={key}>
            <span>{key}</span>: {value}
          </div>
        );
      })}
    </Container>
  );
};
