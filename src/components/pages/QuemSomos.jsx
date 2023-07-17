import React from "react";
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

const QuemSomos = () => {
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
              <Title>Quem Somos</Title>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <h1>Sobre Nós</h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        impedit perferendis sit voluptatem quos voluptas eveniet rem non harum
        possimus accusamus ex, aliquam, pariatur corporis alias iure quis
        laborum reiciendis!
        <h2>
          Teremos o maior prazer em fazer parte do sucesso de sua empresa.
        </h2>
      </div>

      <section className="container mt-5">
        <h2>Nossa Equipe</h2>
        <ContainerCards className="card-container">
          <div className="row">
            <div className="col-md-6">
              <CardQuemSomos className="card shadow-lg">
                <img
                  className="card-img-top"
                  src="https://via.placeholder.com/300x300"
                  alt="Member 1"
                  style={{ width: "300px", height: "300px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
                    <SocialLink href="#">
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
              <CardQuemSomos className="card shadow-lg">
                <img
                  className="card-img-top"
                  src="https://via.placeholder.com/300x300"
                  alt="Member 1"
                  style={{ width: "300px", height: "300px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
                    <SocialLink href="#">
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
