import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import styled from "styled-components";

const WhatsAppButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
  cursor: pointer;
  margin-bottom: 20px;
  margin-right: 20px;

  @media (max-width: 576px) {
    bottom: 10px;
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
    // Número de telefone para o qual você deseja enviar a mensagem
    const phoneNumber = "5511978788732";
    // Mensagem que você deseja enviar
    const message = "Olá, gostaria de mais informações.";

    // Gerar a URL do WhatsApp com o número de telefone e a mensagem
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    // Abrir o WhatsApp em uma nova janela ou guia
    window.open(whatsappUrl, "_blank");
  };

  return (
    <WhatsAppButtonContainer onClick={handleWhatsAppClick}>
      <WhatsAppIcon />
    </WhatsAppButtonContainer>
  );
};

export default WhatsAppButton;
