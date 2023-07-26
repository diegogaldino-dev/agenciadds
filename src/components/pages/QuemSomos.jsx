import React, { useEffect } from "react";
import QuemsomosImg from "../../img/5164968.jpg";
import {
  ImageQuemSomos,
  Title,
  ContainerCards,
  CardQuemSomos,
  SocialContainer,
  SocialLink,
  SocialIcon,
} from "./style";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

import Diego from "../../img/profile/Diego Site .jpg";
import Dayane from "../../img/profile/Dayane Site .jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const QuemSomos = () => {
  const handleWhatsAppClick = () => {
    // Número de telefone para o qual você deseja enviar a mensagem
    const phoneNumber = "5511978788732";
    // Mensagem que você deseja enviar
    const message = "Oi Day Gostaria de mais informações.";

    // Gerar a URL do WhatsApp com o número de telefone e a mensagem
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    // Abrir o WhatsApp em uma nova janela ou guia
    window.open(whatsappUrl, "_blank");
  };

  const handleWhatsdiegoAppClick = () => {
    // Número de telefone para o qual você deseja enviar a mensagem
    const phoneNumber = "5511978788732";
    // Mensagem que você deseja enviar
    const message = "Oi Diego Gostaria de mais informações.";

    // Gerar a URL do WhatsApp com o número de telefone e a mensagem
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    // Abrir o WhatsApp em uma nova janela ou guia
    window.open(whatsappUrl, "_blank");
  };
  useEffect(() => {
    AOS.init();
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
          <div className="container">
            <div className="d-flex flex-column align-items-start align-items-md-center ml-2 ml-md-4">
              <Title data-aos="zoom-out-up" data-aos-duration="800">
                Quem Somos
              </Title>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <h1 className="mb-4" data-aos="fade-up" data-aos-duration="1000">
          Sobre Nós
        </h1>
        <div className="row">
          <div className="col-md-12">
            <p data-aos="fade-up" data-aos-duration="1000">
              Fundada por Diego Galdino, programador, e Dayane Laura,
              especialista em Social Media, nossa empresa nasceu com o objetivo
              de atender o máximo de pessoas e empresas possível. Acreditamos
              que todas as empresas, independentemente do tamanho ou setor,
              merecem ter acesso a soluções digitais de qualidade que
              impulsionem seu sucesso.
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
            <div className="col-md-6">
              <CardQuemSomos className="card shadow-lg mt-2">
                <img
                  className="card-img-top"
                  src={Dayane}
                  alt="Member 1"
                  style={{ width: "300px", height: "300px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Dayane M. Laura</h5>
                  <h5 className="card-title">
                    Gerente de Marketing e Redes Sociais
                  </h5>
                  <p className="card-text">
                    Day, apaixonada por marketing, com 10 anos de experiência em
                    RH, mídias sociais e campanhas de tráfego, foco em
                    resultados mensuráveis.
                  </p>
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
                    <SocialLink href="#">
                      <SocialIcon>
                        <FaEnvelope />
                      </SocialIcon>
                    </SocialLink>
                  </SocialContainer>
                </div>
              </CardQuemSomos>
            </div>

            <div className="col-md-6">
              <CardQuemSomos className="card shadow-lg mt-2">
                <img
                  className="card-img-top"
                  src={Diego}
                  alt="Member 1"
                  style={{ width: "300px", height: "300px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Diego G. Conceição</h5>
                  <h5 className="card-title">
                    Gerente de Projetos e Desenvolvedor WEB                    
                  </h5>
                  <p className="card-text">
                    Desenvolvedor Web apaixonado por tecnologia e programação.
                    15 anos de experiência em diversas linguagens. Foco em
                    resultados e soluções inovadoras.
                  </p>
                  <SocialContainer>
                    <SocialLink href="#">
                      <SocialIcon>
                        <FaInstagram />
                      </SocialIcon>
                    </SocialLink>
                    <SocialLink href="#">
                      <SocialIcon>
                        <FaFacebook />
                      </SocialIcon>
                    </SocialLink>
                    <SocialLink href="#">
                      <SocialIcon>
                        <FaLinkedin />
                      </SocialIcon>
                    </SocialLink>
                    <SocialLink onClick={handleWhatsdiegoAppClick}>
                      <SocialIcon>
                        <FaWhatsapp />
                      </SocialIcon>
                    </SocialLink>
                    <SocialLink href="#">
                      <SocialIcon>
                        <FaEnvelope />
                      </SocialIcon>
                    </SocialLink>
                  </SocialContainer>
                </div>
              </CardQuemSomos>
            </div>
          </div>
        </ContainerCards>
      </section>
    </>
  );
};

export default QuemSomos;
