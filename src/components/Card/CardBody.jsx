import React, { Fragment } from "react";
import styled from "styled-components";
import {
  FaUser,
  FaUserFriends,
  FaSwimmer,
  FaRunning,
  FaPhone,
  FaSms,
} from "react-icons/fa";
import useDeviceDetect from "../../utils/useDeviceDetect";

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
  overflow-wrap: anywhere;
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

export const CardBody = ({ form_data, group, created_at }) => {
  const { isMobile } = useDeviceDetect();
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
            <Label>Nombre</Label>
            <Value>{form_data.nombre}</Value>
            <Label>Matériel</Label>
            <BigValue>{form_data.materiel}</BigValue>
            <Label>Description</Label>
            <BigValue>{form_data.description}</BigValue>
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
                {isMobile && joueur.coordonnees && (
                  <>
                  <a href={`tel:${joueur.coordonnees}`}>
                    <FaPhone />
                  </a>
                  <a href={`sms:${joueur.coordonnees}`}>
                    <FaSms />
                  </a>
                  </>
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
  return (
    <Body>
      <List>
        {renderBody(group)}
        <Label>Inscription</Label>
        <Value>{new Date(created_at).toLocaleString()}</Value>
      </List>
    </Body>
  );
};
