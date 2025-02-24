import React, { useState, useEffect } from "react";
import QuemsomosImg from "../../img/QuemSomos.png";
import {
  ImageQuemSomos,
  // Title,
  ContainerCards,
  CardQuemSomos,
  SocialContainer,
  SocialLink,
  SocialIcon,
  CustomButton,
} from "./style";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  // FaEnvelope,
} from "react-icons/fa";

import useGoogleAnalytics from "../useGoogleAnalytics";

// import Diego from "../../img/profile/Diego Site .png";
import Dayane from "../../img/profile/Dayane Site .png";

import AOS from "aos";
import "aos/dist/aos.css";

const QuemSomos = () => {
  useGoogleAnalytics("G-RHJ8R95WMZ");
  const [isFront, setIsFront] = useState(true);
  // const [isFront1, setIsFront1] = useState(true);

  const handleClick = () => {
    setIsFront(!isFront);
  };
  // const handleClick1 = () => {
  //   setIsFront1(!isFront1);
  // };

  const handleWhatsAppClick = () => {
    const phoneNumber = "5511978788732";
    const message = "Oi Day Gostaria de mais informações.";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  // const handleWhatsdiegoAppClick = () => {
  //   const phoneNumber = "5511978788732";
  //   const message = "Oi Diego Gostaria de mais informações.";
  //   const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
  //     message
  //   )}`;
  //   window.open(whatsappUrl, "_blank");
  // };

  // const handleEmailClick = () => {
  //   const emailAddress = "contato@ddsdesenvolvimento.com.br"; // Coloque o endereço de e-mail que deseja usar
  //   const subject = "Assunto da mensagem"; // Coloque o assunto da mensagem
  //   const emailUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
  //   window.open(emailUrl, "_blank");
  // };

  useEffect(() => {
    AOS.init();
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
  return (
    <>
      <div className="position-relative shadow-lg">
        <ImageQuemSomos
          className="img-fluid"
          src={QuemsomosImg}
          alt="Imagem de Criação de Sites"
        />
        <div className="position-absolute top-0 start-0 mt-5">
          {/* <div className="container">
            <div className="d-flex flex-column align-items-start align-items-md-center ml-2 ml-md-4">
              <Title data-aos="zoom-out-up" data-aos-duration="800">
                Quem Somos
              </Title>
            </div>
          </div> */}
        </div>
      </div>

      <div className="container mt-4">
        <h1 className="mb-4" data-aos="fade-up" data-aos-duration="1000">
          Sobre Nós
        </h1>
        <div className="row">
          <div className="col-md-12">
            <p data-aos="fade-up" data-aos-duration="1000">
              Fundada por Dayane Laura, especialista em Social Media, nossa
              empresa nasceu com o objetivo de atender o máximo de pessoas e
              empresas possível. Acreditamos que todas as empresas,
              independentemente do tamanho ou setor, merecem ter acesso a
              soluções digitais de qualidade que impulsionem seu sucesso.
            </p>
            <p data-aos="fade-up" data-aos-duration="1000">
              Com vasta experiência em nossas áreas de atuação e um compromisso
              inabalável com a excelência, nos dedicamos a oferecer soluções
              personalizadas para cada cliente. Entendemos que cada empresa tem
              necessidades únicas e, por isso, trabalhamos de forma
              personalizada para atender a cada uma delas de maneira eficiente e
              impactante.
            </p>
            <p data-aos="fade-up" data-aos-duration="1000">
              Nosso foco é atender todas as classes de empresas possíveis, desde
              pequenos empreendimentos até grandes corporações. Acreditamos que
              todos têm o direito de contar com serviços de qualidade que
              impulsionem seus negócios e os destaquem no mercado.
            </p>
            <p data-aos="fade-up" data-aos-duration="1000">
              Ao longo de nossa trajetória, buscamos constantemente inovar e nos
              aprimorar para oferecer o que há de melhor em design, SEO, mídias
              sociais e muito mais. Nossa equipe é formada por profissionais
              experientes e altamente capacitados, que trabalham com dedicação e
              paixão para alcançar os melhores resultados para nossos clientes.
            </p>
            <p data-aos="fade-up" data-aos-duration="1000">
              Estamos empenhados em construir relacionamentos sólidos com nossos
              clientes, entendendo suas necessidades e colaborando em seus
              projetos para alcançar resultados excepcionais. Acreditamos no
              poder da parceria e no crescimento conjunto, e é com esse espírito
              que trabalhamos todos os dias.
            </p>
            <p data-aos="fade-up" data-aos-duration="1000">
              Seja qual for o desafio que sua empresa enfrenta, estamos prontos
              para enfrentá-lo ao seu lado. Queremos ser parte da sua jornada de
              sucesso e ajudá-lo a alcançar o próximo nível. Conheça nossos
              serviços e descubra como podemos fazer a diferença para o seu
              negócio.
            </p>
            <p data-aos="fade-up" data-aos-duration="1000">
              Junte-se a nós e potencialize sua presença digital para conquistar
              novas oportunidades e alcançar seus objetivos de forma impactante
              e duradoura.
            </p>
            <h2 className="mt-5" data-aos="fade-up" data-aos-duration="1000">
              Teremos o maior prazer em fazer parte do sucesso de sua empresa.
            </h2>
          </div>
        </div>
      </div>

      <section
        className="container mt-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2>Nossa Equipe</h2>
        <ContainerCards className="card-container">
          <div className="row">
            <div className="col-12 col-md-6 mx-auto">
              <CardQuemSomos className="card shadow-lg mt-2 mx-auto">
                <img
                  className="card-img-top"
                  src={Dayane}
                  alt="Member 1"
                  style={{ width: "299px", height: "300px" }}
                />
                {isFront ? (
                  <div className="card-body">
                    <h5 className="card-title">Dayane M. Laura</h5>
                    <h5 className="card-title">
                      Gerente de Marketing e Redes Sociais
                    </h5>
                    <div className="d-flex justify-content-center">
                      <CustomButton onClick={handleClick}>
                        Saiba Mais
                      </CustomButton>
                    </div>
                  </div>
                ) : (
                  <div className="card-body">
                    <h4 class="font-weight-bold mb-0">Sobre Mim</h4>
                    <hr />
                    <p className="card-text">
                      Day, atuando em marketing, com 10 anos de experiência em
                      RH, mídias sociais e campanhas de tráfego, foco em
                      resultados mensuráveis.
                    </p>
                    <hr />
                    <SocialContainer>
                      <SocialLink
                        href="https://www.instagram.com/day_tico/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SocialIcon>
                          <FaInstagram />
                        </SocialIcon>
                      </SocialLink>
                      <SocialLink
                        href="https://www.facebook.com/diana.cucanhoto"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SocialIcon>
                          <FaFacebook />
                        </SocialIcon>
                      </SocialLink>
                      <SocialLink
                        href="https://www.linkedin.com/in/dayane-m-laura-65b803192/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SocialIcon>
                          <FaLinkedin />
                        </SocialIcon>
                      </SocialLink>
                      <SocialLink onClick={handleWhatsAppClick}>
                        <SocialIcon>
                          <FaWhatsapp />
                        </SocialIcon>
                      </SocialLink>
                    </SocialContainer>

                    <div className="d-flex justify-content-center mt-3">
                      <CustomButton onClick={handleClick}>Voltar</CustomButton>
                    </div>
                  </div>
                )}
              </CardQuemSomos>
            </div>

            {/* <div className="col-12 col-md-6 mx-auto">
              <CardQuemSomos className="card shadow-lg mt-2 mx-auto">
                <img
                  className="card-img-top"
                  src={Diego}
                  alt="Member 1"
                  style={{ width: "299px", height: "300px" }}
                />
                {isFront1 ? (
                  <div className="card-body">
                    <h5 className="card-title">Diego G. Conceição</h5>
                    <h5 className="card-title">
                      Gerente de Projetos e Desenvolvedor WEB
                    </h5>
                    <div className="d-flex justify-content-center">
                      <CustomButton onClick={handleClick1}>
                        Saiba Mais
                      </CustomButton>
                    </div>
                  </div>
                ) : (
                  <div className="card-body">
                    <h4 class="font-weight-bold mb-0">Sobre Mim</h4>
                    <hr />
                    <p className="card-text">
                      Desenvolvedor Web apaixonado por tecnologia e programação.
                      15 anos de experiência em diversas linguagens. Foco em
                      resultados e soluções inovadoras.
                    </p>
                    <hr />
                    <SocialContainer>
                      <SocialLink
                        href="https://instagram.com/diego_ghaldino?igshid=MzNlNGNkZWQ4Mg=="
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SocialIcon>
                          <FaInstagram />
                        </SocialIcon>
                      </SocialLink>
                      <SocialLink
                        href="https://www.facebook.com/diego.galdino.54?mibextid=ZbWKwL"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SocialIcon>
                          <FaFacebook />
                        </SocialIcon>
                      </SocialLink>
                      <SocialLink
                        href="https://www.linkedin.com/in/diego-galdinoc"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SocialIcon>
                          <FaLinkedin />
                        </SocialIcon>
                      </SocialLink>
                      <SocialLink onClick={handleWhatsdiegoAppClick}>
                        <SocialIcon>
                          <FaWhatsapp />
                        </SocialIcon>
                      </SocialLink>
                      
                    </SocialContainer>

                    <div className="d-flex justify-content-center mt-3">
                      <CustomButton onClick={handleClick1}>Voltar</CustomButton>
                    </div>
                  </div>
                )}
              </CardQuemSomos>
            </div> */}
          </div>
        </ContainerCards>
      </section>
    </>
  );
};

export default QuemSomos;
