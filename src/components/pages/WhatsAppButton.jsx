import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Número de telefone para o qual você deseja enviar a mensagem
    const phoneNumber = "123456789";
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
    <div
      className="fixed-bottom d-flex justify-content-end mb-4"
      style={{ zIndex: 999, marginRight: "20px", cursor:"pointer"}}
    >
      <span onClick={handleWhatsAppClick}>
        <FaWhatsapp color="green" style={{fontSize:"70px"}}/>
      </span>
    </div>
  );
};

export default WhatsAppButton;
