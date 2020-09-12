import React, { Fragment } from "react";
import styled from "styled-components";
import {
  FaPhone,
  FaEnvelope,
  FaUser,
  FaUserFriends,
  FaSwimmer,
  FaRunning,
} from "react-icons/fa";

const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid #f8f9fa;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);

  a {
    color: #333;
    border: 1px solid #333;
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius: 50%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #f8f9fa;
  padding: 1rem 0.5rem;

  h3 {
    font-weight: bold;
  }
`;

const Body = styled.div`
  padding: 0.5rem 0.5rem 1rem;
  width: 100%;
`;

const List = styled.dl`
  display: grid;
  grid-template-columns: 1fr auto;

  dt,
  dt + dd {
    margin-top: 0.5rem;
  }
`;

const Label = styled.dt`
  grid-column: 1;
  font-weight: bold;

  &:after {
    content: ":";
  }
`;

const Value = styled.dd`
  grid-column: 2;
  height: auto;
  display: flex;
  justify-content: flex-end;
`;

const BigValue = styled(Value)`
  grid-column: 1/3;
  justify-content: space-between;
  align-items: center;
  text-align: left;

  span:first-child {
    flex: 1 1 auto;
    text-align: left;

    svg {
      margin-left: 0.5rem;
    }
  }

  span {
    flex: 0 1 12ch;
    padding-right: 1rem;
    text-align: right;
  }

  a {
    flex: 0 auto;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  background: #f8f9fa;
  margin-top: auto;
`;

let previousLetter;

export const Card = ({ displayGroup, group, form_data, created_at }) => {
  // console.log({ displayGroup, group, form_data, created_at });

  const renderBody = (group) => {
    switch (group) {
      case "Bénévoles":
        return (
          <>
            <Label>T-shirt</Label>
            <Value>{form_data.taille}</Value>
            <Label>Catégories</Label>
            {form_data.categories.map((categorie, i) => (
              <BigValue key={i}>{categorie}</BigValue>
            ))}
            <Label>Disponibilités</Label>
            {form_data.horaires.map((horaire, i) => (
              <BigValue key={i}>{horaire}</BigValue>
            ))}
            <Label>Commentaire</Label>
            <BigValue>{form_data.addition}</BigValue>
          </>
        );
      case "Artistes":
        return (
          <>
            <Label>Catégorie</Label>
            <Value>{form_data.categorie}</Value>
            <Label>Durée</Label>
            <Value>{form_data.duree}</Value>
            <Label>Matériel</Label>
            <Value>{form_data.materiel}</Value>
            <Label>Nombre</Label>
            <Value>{form_data.nombre}</Value>
            <Label>Description</Label>
            <Value>{form_data.description}</Value>
          </>
        );
      case "Participants":
      case "Grands":
        return (
          <>
            <Label>Catégorie</Label>
            <Value>{form_data.categorie}</Value>
            <Label>Quartier</Label>
            <Value>{form_data.quartier}</Value>
            <Label>Référent</Label>
            <Value>{form_data.referent}</Value>
            <Label>Joueurs</Label>
            {form_data.joueurs.map((joueur, i) => (
              <BigValue key={i}>
                <span>
                  {joueur.nom}
                  {joueur.capitaine === "Oui" && <FaUser />}
                  {joueur.vice_capitaine === "Oui" && <FaUserFriends />}
                  {joueur.nageur === "Oui" && <FaSwimmer />}
                  {joueur.coureur === "Oui" && <FaRunning />}
                </span>
                <span>{joueur.taille}</span>
                <span>{joueur.date_de_naissance}</span>
                {joueur.coordonnees && (
                  <a href={`tel:${joueur.coordonnees}`}>
                    <FaPhone />
                  </a>
                )}
              </BigValue>
            ))}
          </>
        );
      default:
        return Object.entries(form_data).map(([key, value]) => {
          return (
            <Fragment key={key}>
              <Label>{key.charAt(0).toUpperCase() + key.slice(1)}</Label>
              <Value>{value}</Value>
            </Fragment>
          );
        });
    }
  };
  
  let currentLetter = form_data.nom.charAt(0).toUpperCase();
  let navigationId;
  if (currentLetter !== previousLetter) {
    navigationId = `data-navigation-${currentLetter}`;
    previousLetter = currentLetter;
  }

  return (
    <Container id={navigationId}>
      <Header>
        <h3>
          {`${form_data.nom.toUpperCase()} ${form_data.prenom || ""}`.trim()}
        </h3>
        {displayGroup && <p role="doc-subtitle">{group}</p>}
      </Header>
      <Body>
        <List>
          {renderBody(group)}
          <Label>Inscription</Label>
          <Value>{new Date(created_at).toLocaleString()}</Value>
        </List>
      </Body>
      {(form_data.telephone || form_data.email) && (
        <Footer>
          {form_data.telephone && (
            <a href={`tel:${form_data.telephone}`}>
              <FaPhone />
            </a>
          )}
          {form_data.email && (
            <a href={`mailto:${form_data.email}`}>
              <FaEnvelope />
            </a>
          )}
        </Footer>
      )}
    </Container>
  );
};
