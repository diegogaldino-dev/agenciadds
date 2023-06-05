import React from "react";
import { Image, Title, Text } from "./style";
import { Button } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";

import criacaoImg from "../../img/cropped-view-hands-typing-laptop.jpg"

const Criacao_de_sites = () => {
  const sendWhatsAppMessage = () => {
    const mensagem = encodeURIComponent(
      "Olá, gostaria de solicitar um orçamento."
    );
    const numeroWhatsApp = "SEU_NUMERO_WHATSAPP";

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
          <container>
            <div
              className="d-flex flex-column align-items-start"
              style={{ marginLeft: "120px" }}
            >
              <Title>Criação de Sites</Title>
              <Text className="text-left custom-text">
                Pensou em criação de sites? Está no lugar certo! Na DDS
                Agência de Desenvolvimento, oferecemos criação de sites
                profissionais, personalizados, gerenciáveis e administráveis.
                Desenvolvemos sites de verdade! Trabalhamos com empresas,
                profissionais liberais e sites pessoais! Nossos sites são de
                fácil atualização, permitindo que você mantenha seu conteúdo
                sempre atualizado.
              </Text>
              <Button onClick={sendWhatsAppMessage} className="mt-3" style={{background: 'rgb(135, 23, 157)', border: 'none'}}>
                <FaWhatsapp size={20} style={{ marginRight: "0.5rem", marginBottom: "3px"}} />
                Solicitar Orçamento
              </Button>
            </div>
          </container>
        </div>
      </div>

      <div>
        <div className="container pb-5">
          <div className="row">
            <div className="col-md-6" style={{ marginTop: "30px" }}>
              <h2 className="justify-content-center d-flex align-items-center" style={{ marginTop: "120px" }}>
                Quais são as etapas da criação de sites?
              </h2>
              <p>
                Quando se fala em criação de sites profissionais, planejamento
                nunca é demais. Tudo deve ser pensado antes de colocar a mão na
                massa. Um bom desenvolvedor de site tem que pensar em cada etapa
                do processo de criação, sempre se adequando aos objetivos e
                interesses que ele tem com o site. E é claro, fazer tudo isso com
                muito capricho, não é mesmo?
              </p>
            </div>
            <div className="col-md-6" style={{ marginTop: "30px" }}>
              <h4>Briefing</h4>
              <p>Entender a expectativa</p>
              <p>
                Através das perguntas existentes no Briefing, a nossa equipe
                poderá traduzir as suas expectativas e criar um site profissional
                e personalizado.
              </p>
              <h4>Conteúdos</h4>
              <p>Textos e imagens</p>
              <p>
                Nosso time de redação vai ajudar na criação de textos para o seu
                site de forma bem próxima. A criação de sites depende de textos
                bem elaborados.
              </p>
              <h4>Criação do site</h4>
              <p>Equipe de criação</p>
              <p>
                A equipe trabalhará na criação do site com base nas informações e
                conteúdos. Você receberá um link com a prévia do seu projeto.
              </p>
              <h4>Finalização</h4>
              <p>Publicação e conclusão</p>
              <p>
                Nesta etapa iremos concluir as páginas internas do seu site,
                formulários, módulos e etc. A equipe irá testar o site e deixá-lo
                pronto para ser lançado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Criacao_de_sites;
