import styled from "styled-components";

export const Toggle = styled.div`
  display: none;
  height: 100%;
  width: 100%;
  cursor: pointer;
  padding: 0 10vw;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    display: flex;
  }
`;
