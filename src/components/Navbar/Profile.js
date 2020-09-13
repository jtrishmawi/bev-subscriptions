import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { LogoutButton } from "./LogoutButton";
import { LoginButton } from "./LoginButton";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;

  img {
    margin: 0 0.5rem;
    border-radius: 505%;
  }

  button {
    margin: 0 0.5rem;
  }
`;

export const Profile = () => {
  const { user, isAuthenticated, isLoading, ...rest } = useAuth0();
  console.log({ user, isAuthenticated, isLoading, rest });

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) return <LoginButton />;
  return (
    <Container>
      <img src={user.picture} alt={user.name} height={48} width={48} />
      <LogoutButton />
    </Container>
  );
};
