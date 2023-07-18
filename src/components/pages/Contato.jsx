import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FaInstagram, FaFacebookSquare, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { ImageCont, Title, TextContatoInfo, LinkWithoutUnderline, ParagrafoDoTextcolorContato, TitleContato } from "./style";

import criacaoImg from "../../img/contato.jpg";
import emailjs from "emailjs-com";

const Contato = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  const enviarEmail = (event) => {
    event.preventDefault();

    const templateParams = {
      from_name: nome,
      user_email: email,
      phone: telefone,
      message: mensagem,
    };

    emailjs
      .send("service_fydjchd", "template_njfb402", templateParams, "n2OzR1QUrxe-xXfSZ")
      .then((response) => {
        console.log("E-mail enviado com sucesso!", response.status, response.text);
        // Limpe o formulário após o envio
        setNome("");
        setEmail("");
        setTelefone("");
        setMensagem("");
      })
      .catch((error) => {
        console.error("Erro ao enviar o e-mail:", error);
      });
  };

  const handleWhatsappClick = () => {
    // Lógica para abrir o WhatsApp
  };

  const handleEmailClick = () => {
    // Lógica para abrir o email
  };

  return (
    <>
      <div className="position-relative">
        <ImageCont className="img-fluid" src={criacaoImg} alt="Imagem de Criação de Sites" />
        <div className="position-absolute top-0 start-0 mt-5">
          <div className="container">
            <div className="d-flex flex-column align-items-start align-items-md-center ml-2 ml-md-4">
              <Title>Fale Conosco</Title>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-5">
        <h2 className="mt-4">Fale com a gente!</h2>
        <h6>Seu contato é muito importante</h6>
        <div className="row">
          <div className="col-md-6">
            <form className="mt-4 mb-4" onSubmit={enviarEmail}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nome:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  E-mail:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Telefone:
                </label>
                <PhoneInput
                  country={"br"}
                  value={telefone}
                  onChange={(phone) => setTelefone(phone)}
                  inputClass="form-control"
                  inputProps={{
                    id: "phone",
                    name: "phone",
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Mensagem:
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <TextContatoInfo className="p-4 rounded shadow-lg">
              <div>
                <div className="text-center">
                  <TitleContato className="text-center mt-4 shadow-lg">Contatos</TitleContato>
                </div>
                <ParagrafoDoTextcolorContato className="mr-3 text-white">
                  <LinkWithoutUnderline
                    className="text-white shadow-lg"
                    href="https://api.whatsapp.com/numero-do-whatsapp"
                    onClick={handleWhatsappClick}
                  >
                    <FaWhatsapp className="mr-4" /> Whatsapp (Comercial)
                  </LinkWithoutUnderline>
                </ParagrafoDoTextcolorContato>
                <ParagrafoDoTextcolorContato>
                  <LinkWithoutUnderline
                    className="text-white shadow-lg"
                    href="mailto:contato@ddsdesenvolvimento.com.br"
                    onClick={handleEmailClick}
                  >
                    <FaEnvelope className="mr-4 text-white" /> contato@ddsdesenvolvimento.com.br
                  </LinkWithoutUnderline>
                </ParagrafoDoTextcolorContato>

                <ul className="list-unstyled d-flex flex-row justify-content-center">
                  <li>
                    <a className="text-white px-2" href="#!">
                      <div
                        className="rounded-circle bg-white d-flex align-items-center justify-content-center shadow-lg"
                        style={{ width: "40px", height: "40px" }}
                      >
                        <FaFacebookSquare style={{ color: "#4267B2" }} />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="text-white px-2" href="#!">
                      <div
                        className="rounded-circle bg-white d-flex align-items-center justify-content-center shadow-lg"
                        style={{
                          width: "40px",
                          height: "40px",
                          marginLeft: "5px",
                        }}
                      >
                        <FaInstagram style={{ color: "#E4405F" }} />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </TextContatoInfo>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contato;
