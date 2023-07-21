import React from "react";
import {
  Image,
  TitleMark,
  Text,
  TextImportancia,
  BackImagemMidia,
  TextBackground,
  ParagrafoDoTextBackground,
  DivTextCreater,
} from "./style";
import { FaChevronRight } from "react-icons/fa";
import { AiFillFileText } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { FiCheckCircle } from "react-icons/fi";

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
            <div className="d-flex flex-column align-items-start align-items-md-center ml-2 ml-md-4">
              <TitleMark>Social Midia</TitleMark>
              <Text className="text-left custom-text">
                Pensando em potencializar sua presença online e alcançar um
                público maior? Conte com os serviços de social midia da DDS
                Agência de Desenvolvimento. Nossa equipe especializada oferece
                soluções personalizadas para impulsionar sua marca e alcançar
                seus objetivos digitais. Desde estratégias de marketing digital
                até gerenciamento de redes sociais, estamos prontos para ajudar.
                Aproveite as vantagens da social midia e destaque-se no mercado.
                Entre em contato conosco e descubra como podemos impulsionar sua
                presença online.
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
          Como Funciona o Processo
        </TextBackground>
        <ParagrafoDoTextBackground className="shadow-lg">
          Quando se fala em impulsionar sua presença nas redes sociais, o planejamento é essencial. Na DDS Agência de Desenvolvimento, nossa equipe especializada oferece um processo personalizado para potencializar sua marca e alcançar seus objetivos digitais. Analisamos suas expectativas e necessidades para criar estratégias de marketing digital que estejam em sintonia com seus interesses. Nosso compromisso é garantir resultados reais e mensuráveis em suas redes sociais, conectando sua marca com seu público-alvo de forma eficiente.
        </ParagrafoDoTextBackground>
      </div>
      <DivTextCreater className="col-md-6 shadow-lg">
        <h4>Estratégias Personalizadas <FaChevronRight color="#702AAF" /></h4>
        <p>Análise e Planejamento</p>
        <p>
          Nossa equipe de especialistas cria estratégias personalizadas para cada cliente, levando em consideração o perfil do seu público-alvo, o setor de atuação e as metas do seu negócio. Utilizamos ferramentas e técnicas avançadas para otimizar suas redes sociais e alcançar melhores resultados.
        </p>
        <h4>Gerenciamento de Redes Sociais <AiFillFileText color="#166AF2"/></h4>
        <p>Conteúdos Relevantes</p>
        <p>
          Contamos com um time de redação altamente qualificado para criar conteúdos relevantes e atrativos para suas redes sociais. Desenvolvemos posts, artigos, vídeos e outros formatos que impactem seu público e gerem engajamento.
        </p>
        <h4>Análise de Resultados e Ajustes <BsCodeSlash color="#87179D"/></h4>
        <p>Monitoramento Constante</p>
        <p>
          Acompanhamos de perto o desempenho das suas redes sociais, analisando métricas e resultados para identificar oportunidades de melhoria e ajustar a estratégia sempre que necessário.
        </p>
        <h4>Maximize sua Presença Digital <FiCheckCircle color="green"/></h4>
        <p>Alcance e Relevância</p>
        <p>
          Com nossas estratégias personalizadas e gerenciamento de redes sociais eficiente, você poderá maximizar sua presença digital, alcançando mais pessoas e aumentando a relevância da sua marca no mercado.
        </p>
      </DivTextCreater>
    </div>
  </div>
</BackImagemMidia>
    </>
  );
};

export default Social_Media;
