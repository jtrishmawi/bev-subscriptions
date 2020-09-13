import styled from "styled-components";

export const Navigation = styled.nav`
  height: max(10vh, 60px);
  width: 100%;
  display: flex;
  background: #f8f9fa;
  position: relative;
  text-transform: capitalize;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;
  padding: 0;

  @media (max-width: 480px) {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`;
