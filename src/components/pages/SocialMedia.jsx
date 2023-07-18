import React from "react";
import { Image, TitleMark, Text, TextImportancia, BackImagemMidia,TextBackground,ParagrafoDoTextBackground, DivTextCreater } from "./style";
import { FaChevronRight } from "react-icons/fa";
import { AiFillFileText } from 'react-icons/ai';
import { BsCodeSlash } from 'react-icons/bs';
import { FiCheckCircle } from 'react-icons/fi';

import midiaDigital from "../../img/3107569.jpg";

const Social_Media = () => {
  return (
    <>
      <div className="position-relative">
        <Image
          className="img-fluid"
          src={midiaDigital}
          alt="Imagem Social Midia"
        />
        <div className="position-absolute top-0 start-0">
          <container>
            <div
              className="d-flex flex-column align-items-start align-items-md-center ml-2 ml-md-4"
             
            >
              <TitleMark>Social Midia</TitleMark>
              <Text className="text-left custom-text">
                Pensando em potencializar sua presença online e alcançar um
                público maior? Conte com os serviços de social midia da DDS
                Agência de Desenvolvimento. Nossa equipe especializada oferece
                soluções personalizadas para impulsionar sua marca e alcançar
                seus objetivos digitais. Desde estratégias de marketing digital
                até gerenciamento de redes sociais, estamos prontos para ajudar.
                Aproveite as vantagens da social midia e destaque-se no
                mercado. Entre em contato conosco e descubra como podemos
                impulsionar sua presença online.
              </Text>
            </div>
          </container>
        </div>
      </div>

      <TextImportancia>
        <div className="container pb-5 pt-5 text-center">
          <h3 style={{ color: "#87179D" }}>Vantagens da Social Midia</h3>
          <p>
            Destaque sua marca, alcance seu público-alvo e impulsione suas
            vendas com a social midia. Aumente sua visibilidade, mensure seus
            resultados e conquiste resultados rápidos. Invista na DDS Agência de
            Desenvolvimento e aproveite todas as vantagens da social midia para
            o crescimento do seu negócio.
          </p>
        </div>
      </TextImportancia>

      <BackImagemMidia>
        <div className="container pb-5">
          <div className="row">
            <div className="col-md-6" style={{ marginTop: "220px" }}>
              <TextBackground className="shadow-lg">
                Como funciona o Processo
              </TextBackground>
              <ParagrafoDoTextBackground className="shadow-lg">
                Quando se fala em criação de sites profissionais, planejamento
                nunca é demais. Tudo deve ser pensado antes de colocar a mão na
                massa. Um bom desenvolvedor de site tem que pensar em cada etapa
                do processo de criação, sempre se adequando aos objetivos e
                interesses que ele tem com o site. E é claro, fazer tudo isso com
                muito capricho, não é mesmo?
              </ParagrafoDoTextBackground>
            </div>
            <DivTextCreater className="col-md-6 shadow-lg">
              <h4>Briefing <FaChevronRight color="#702AAF" /></h4>
              <p>Entender a expectativa</p>
              <p>
                Através das perguntas existentes no Briefing, a nossa equipe
                poderá traduzir as suas expectativas e criar um site profissional
                e personalizado.
              </p>
              <h4>Conteúdos <AiFillFileText color="#166AF2"/></h4>
              <p>Textos e imagens</p>
              <p>
                Nosso time de redação vai ajudar na criação de textos para o seu
                site de forma bem próxima. A criação de sites depende de textos
                bem elaborados.
              </p>
              <h4>Criação do site <BsCodeSlash color="#87179D"/></h4>
              <p>Equipe de criação</p>
              <p>
                A equipe trabalhará na criação do site com base nas informações e
                conteúdos. Você receberá um link com a prévia do seu projeto.
              </p>
              <h4>Finalização <FiCheckCircle color="green"/></h4>
              <p>Publicação e conclusão</p>
              <p>
                Nesta etapa iremos concluir as páginas internas do seu site,
                formulários, módulos e etc. A equipe irá testar o site e deixá-lo
                pronto para ser lançado.
              </p>
            </DivTextCreater>
          </div>
        </div>
      </BackImagemMidia>
    </>
  );
};

export default Social_Media;
