import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import useGoogleAnalytics from "../useGoogleAnalytics";

import {
  Image,
  TitleCreate,
  Text,
  TextBGColor,
  TextImportancia,
  TextBackground,
  ParagrafoDoTextBackground,
  DivTextCreater,
} from "./style";
import { Button } from "react-bootstrap";
import { FaWhatsapp, FaChevronRight } from "react-icons/fa";
import { AiFillFileText } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { FiCheckCircle } from "react-icons/fi";

import criacaoImg from "../../img/cropped-view-hands-typing-laptop.jpg";

const Criacao_de_sites = () => {
  useGoogleAnalytics("G-RHJ8R95WMZ");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    // Adicione o código de rastreamento do Google Analytics aqui
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-RHJ8R95WMZ";
    document.head.appendChild(script1);

    script1.onload = () => {
      const script2 = document.createElement("script");
      script2.innerHTML = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-RHJ8R95WMZ');
`;
      document.head.appendChild(script2);
    };
  }, []);

  const sendWhatsAppMessage = () => {
    const mensagem = encodeURIComponent(
      "Olá, gostaria de solicitar um orçamento."
    );
    const numeroWhatsApp = "5511978788732";

    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensagem}`);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="position-relative">
        <Image
          className="img-fluid"
          src={criacaoImg}
          alt="Notebook com código em desenvolvimento de site"
          loading="lazy"
        />
        <div className="position-absolute top-0 start-0">
          <div
            data-aos="fade-up"
            className="d-flex flex-column align-items-start align-items-md-center ml-2 ml-md-4"
          >
            <TitleCreate>
              Criação de Sites Profissionais e Personalizados
            </TitleCreate>
            <Text className="text-center text-md-left custom-text">
              Na DDS Agência de Desenvolvimento, criamos sites que se destacam!
              Desenvolvemos sites profissionais, personalizados e gerenciáveis
              para empresas, profissionais liberais e até mesmo projetos
              pessoais. Um site moderno e otimizado para SEO é o primeiro passo
              para o sucesso online.
              <br />
              <br />
              Além disso, desenvolvemos landing pages de alta conversão,
              perfeitas para impulsionar suas campanhas e gerar mais resultados.
            </Text>
            <Button
              onClick={sendWhatsAppMessage}
              className="mt-3"
              style={{ background: "rgb(135, 23, 157)", border: "none" }}
              aria-label="Solicitar orçamento via WhatsApp"
            >
              <FaWhatsapp
                size={20}
                style={{ marginRight: "0.5rem", marginBottom: "3px" }}
              />
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </section>

      {/* Section: Vantagens */}
      <section>
        <TextImportancia data-aos="fade-up">
          <div className="container pb-5 pt-5 text-center">
            <h2 style={{ color: "#87179D" }}>
              Por que investir em um site profissional?
            </h2>
            <p>
              Um site profissional aumenta sua visibilidade nos mecanismos de
              busca, transmite credibilidade e impulsiona seu negócio. É a ponte
              entre sua marca e seus clientes. Não fique para trás, seja
              encontrado online!
            </p>
            <Button
              onClick={sendWhatsAppMessage}
              className="mt-3"
              style={{ background: "#702AAF", border: "none" }}
              aria-label="Fale agora com nossos especialistas"
            >
              Fale com nossos especialistas!
            </Button>
          </div>
        </TextImportancia>
      </section>

      {/* Section: Etapas da Criação */}
      <section>
        <TextBGColor className="img-fluid" data-aos="fade-up">
          <div className="container pb-5">
            <div className="row">
              <div className="col-md-6" style={{ marginTop: "220px" }}>
                <TextBackground className="shadow-lg">
                  As 4 etapas da criação do seu site
                </TextBackground>
                <ParagrafoDoTextBackground className="shadow-lg">
                  Criar um site é um processo que exige planejamento estratégico
                  e execução com excelência. Nossa equipe garante que cada etapa
                  seja realizada de forma profissional, focando nos objetivos do
                  seu negócio.
                </ParagrafoDoTextBackground>
              </div>
              <DivTextCreater className="col-md-6 shadow-lg">
                <h4 data-aos="fade-up">
                  Briefing <FaChevronRight color="#702AAF" />
                </h4>
                <p>
                  Entender suas expectativas para criar um site único e
                  funcional.
                </p>
                <h4 data-aos="fade-up">
                  Conteúdos <AiFillFileText color="#166AF2" />
                </h4>
                <p>
                  Textos e imagens otimizados para engajar e converter clientes.
                </p>
                <h4 data-aos="fade-up">
                  Criação do site <BsCodeSlash color="#87179D" />
                </h4>
                <p>
                  Equipe dedicada desenvolvendo o site perfeito para o seu
                  negócio.
                </p>
                <h4 data-aos="fade-up">
                  Finalização <FiCheckCircle color="green" />
                </h4>
                <p>
                  Testes e publicação para garantir uma experiência impecável ao
                  usuário.
                </p>
                <Button
                  onClick={sendWhatsAppMessage}
                  className="mt-3"
                  style={{ background: "rgb(135, 23, 157)", border: "none" }}
                  aria-label="Solicite agora seu site profissional"
                >
                  Solicite agora seu site profissional
                </Button>
              </DivTextCreater>
            </div>
          </div>
        </TextBGColor>
      </section>
    </main>
  );
};

export default Criacao_de_sites;
