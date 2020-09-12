import React from "react";
import { FaPhone, FaEnvelope, FaSms } from "react-icons/fa";
import useDeviceDetect from "../../utils/useDeviceDetect";
import styled from "styled-components";

const Footer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  background: #f8f9fa;
  margin-top: auto;
`;

export const CardFooter = ({ form_data }) => {
  const { isMobile } = useDeviceDetect();
  if (!isMobile) return null;

  return (
    <Footer>
      {form_data.telephone && (
        <>
          <a href={`tel:${form_data.telephone}`}>
            <FaPhone />
          </a>
          <a href={`sms:${form_data.telephone}`}>
            <FaSms />
          </a>
        </>
      )}
      {form_data.email && (
        <a href={`mailto:${form_data.email}`}>
          <FaEnvelope />
        </a>
      )}
    </Footer>
  );
};
