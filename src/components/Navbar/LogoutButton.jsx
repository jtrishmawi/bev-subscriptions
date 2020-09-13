import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FiLogOut } from "react-icons/fi";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
`;

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button
      onClick={() => {
        localStorage.removeItem("bev-selection");
        logout({ returnTo: window.location.origin });
      }}
    >
      <FiLogOut />
    </Button>
  );
};
