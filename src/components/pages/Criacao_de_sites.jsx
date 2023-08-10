import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Image, TitleCreate, Text, TextBGColor, TextImportancia, TextBackground, ParagrafoDoTextBackground, DivTextCreater } from "./style";
import { Button } from "react-bootstrap";
import { FaWhatsapp, FaChevronRight } from "react-icons/fa";
import { AiFillFileText } from 'react-icons/ai';
import { BsCodeSlash } from 'react-icons/bs';
import { FiCheckCircle } from 'react-icons/fi';

import criacaoImg from "../../img/cropped-view-hands-typing-laptop.jpg";

const Criacao_de_sites = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const sendWhatsAppMessage = () => {
    const mensagem = encodeURIComponent(
      "Olá, gostaria de solicitar um orçamento."
    );
    const numeroWhatsApp = "5511978788732";

    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensagem}`);
  };

  return (
    <>
      <div className="position-relative">
        <Image
          className="img-fluid"
          src={criacaoImg}
          alt="Imagem de Criação de Sites"
        />
        <div className="position-absolute top-0 start-0">
          <container data-aos="fade-up">
            <div
              className="d-flex flex-column align-items-start align-items-md-center ml-2 ml-md-4"
            >
              <TitleCreate>Criação de Sites</TitleCreate>
              <Text className="text-center text-md-left custom-text">
                Pensou em criação de sites? Está no lugar certo! Na DDS
                Agência de Desenvolvimento, oferecemos criação de sites
                profissionais, personalizados, gerenciáveis e administráveis.
                Desenvolvemos sites de verdade! Trabalhamos com empresas,
                profissionais liberais e sites pessoais! Nossos sites são de
                fácil atualização, permitindo que você mantenha seu conteúdo
                sempre atualizado.
              </Text>
              <Button
                onClick={sendWhatsAppMessage}
                className="mt-3"
                style={{ background: "rgb(135, 23, 157)", border: "none" }}
              >
                <FaWhatsapp
                  size={20}
                  style={{ marginRight: "0.5rem", marginBottom: "3px" }}
                />
                Solicitar Orçamento
              </Button>
            </div>
          </container>
        </div>
      </div>

      <TextImportancia data-aos="fade-up">
        <div className="container pb-5 pt-5 text-center">
          <h3 style={{ color: "#87179D" }}>Vantagens da criação de sites profissionais</h3>
          <p>
            A criação de sites profissionais oferece vantagens como credibilidade, controle sobre o conteúdo, melhor visibilidade nos mecanismos de busca e integração com outras plataformas. Isso contribui para transmitir profissionalismo, alcançar um público mais amplo, aumentar a confiança dos clientes, facilitar a interação e impulsionar o crescimento do negócio online.
          </p>
        </div>
      </TextImportancia>

      <TextBGColor className="img-fluid" data-aos="fade-up">
        <div className="container pb-5">
          <div className="row">
            <div className="col-md-6" style={{ marginTop: "220px" }}>
              <TextBackground className="shadow-lg">
                Quais são as etapas da criação de sites?
              </TextBackground>
              <ParagrafoDoTextBackground className="shadow-lg">
                Quando se fala em criação de sites profissionais, planejamento nunca é demais. Tudo deve ser pensado antes de colocar a mão na massa. Um bom desenvolvedor de site tem que pensar em cada etapa do processo de criação, sempre se adequando aos objetivos e interesses que ele tem com o site. E é claro, fazer tudo isso com muito capricho, não é mesmo?
              </ParagrafoDoTextBackground>
            </div>
            <DivTextCreater className="col-md-6 shadow-lg">
              <h4 data-aos="fade-up">Briefing <FaChevronRight color="#702AAF" /></h4>
              <p>Entender a expectativa</p>
              <p>
                Através das perguntas existentes no Briefing, a nossa equipe poderá traduzir as suas expectativas e criar um site profissional e personalizado.
              </p>
              <h4 data-aos="fade-up">Conteúdos <AiFillFileText color="#166AF2" /></h4>
              <p>Textos e imagens</p>
              <p>
                Nosso time de redação vai ajudar na criação de textos para o seu site de forma bem próxima. A criação de sites depende de textos bem elaborados.
              </p>
              <h4 data-aos="fade-up">Criação do site <BsCodeSlash color="#87179D" /></h4>
              <p>Equipe de criação</p>
              <p>
                A equipe trabalhará na criação do site com base nas informações e conteúdos. Você receberá um link com a prévia do seu projeto.
              </p>
              <h4 data-aos="fade-up">Finalização <FiCheckCircle color="green" /></h4>
              <p>Publicação e conclusão</p>
              <p>
                Nesta etapa iremos concluir as páginas internas do seu site, formulários, módulos e etc. A equipe irá testar o site e deixá-lo pronto para ser lançado.
              </p>
            </DivTextCreater>
          </div>
        </div>
      </TextBGColor>
    </>
  );
};

export default Criacao_de_sites;
