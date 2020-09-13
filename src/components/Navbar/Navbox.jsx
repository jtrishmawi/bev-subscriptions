import styled from "styled-components";
export const Navbox = styled.div`
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
    top: max(10vh, 60px);
    left: ${(props) => (props.open ? "0" : "-100%")};
  }
`;
