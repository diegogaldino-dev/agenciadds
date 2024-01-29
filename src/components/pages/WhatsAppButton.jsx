import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import styled from "styled-components";

const WhatsAppButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 10px;
  z-index: 1000;
  cursor: pointer;
  margin-bottom: 20px;
  margin-right: 20px;

  @media (max-width: 576px) {
    position: fixed;
    bottom: 80px;
    right: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
  }
`;

const WhatsAppIcon = styled(FaWhatsapp)`
  font-size: 70px;
  color: green;

  @media (max-width: 576px) {
    font-size: 50px;
    margin-right: 15px;
  }
`;

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5511978788732";
    const message = "Olá, gostaria de mais informações.";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <WhatsAppButtonContainer onClick={handleWhatsAppClick}>
      <WhatsAppIcon />
    </WhatsAppButtonContainer>
  );
};

export default WhatsAppButton;
