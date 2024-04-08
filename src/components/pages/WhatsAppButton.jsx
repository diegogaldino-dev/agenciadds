import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import AvatarButton from "../../img/logo_oficial 1.svg"

const WhatsAppButton = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="5511978788732"
      accountName="DDS Desenvolvimento"
      avatar={AvatarButton}
      message="Olá! como posso te ajudar hoje ?"
      darkMode={false}
      chatMessage="Olá, gostaria de mais informações."
      allowClickAway={true}
      placeholder="Digite sua mensagem aqui..."
      statusMessage="Online" // Mensagem de status
      styles={{
        backgroundColor: "#25d366",
        color: "#fff",
        iconColor: "#fff",
      }}
    />
  );
};

export default WhatsAppButton;
