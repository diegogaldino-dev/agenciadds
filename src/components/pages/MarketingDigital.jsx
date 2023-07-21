import React, { useState, useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Image,
  TitleMark,
  Text,
  TextImportancia,
  StyledButton,
  StyledCollapse,
  CollapseOpen,
} from "./style";
import { Card, Container } from "react-bootstrap";

import mktImg from "../../img/31958.jpg";

import Alinhamento from "../../img/icons/alinhamento.jpg"
import Estrategia from "../../img/icons/estrategiapersonalizada.jpg"
import Relacionamento from "../../img/icons/relacionamentoeresultado.jpg"


const MarketingDigital = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  const [isFirstCollapseOpen, setIsFirstCollapseOpen] = useState(false);
  const [isSecondCollapseOpen, setIsSecondCollapseOpen] = useState(false);
  const [isThirdCollapseOpen, setIsThirdCollapseOpen] = useState(false);
  const [isFourthCollapseOpen, setIsFourthCollapseOpen] = useState(false);
  const [isFifthCollapseOpen, setIsFifthCollapseOpen] = useState(false);
  const [isSixthCollapseOpen, setIsSixthCollapseOpen] = useState(false);
  const [isSeventhCollapseOpen, setIsSeventhCollapseOpen] = useState(false);
  const [isEighthCollapseOpen, setIsEighthCollapseOpen] = useState(false);
  const [isNinthCollapseOpen, setIsNinthCollapseOpen] = useState(false);
  // const [isTenthCollapseOpen, setIsTenthCollapseOpen] = useState(false);

  const handleFirstCollapse = () => {
    setIsFirstCollapseOpen(!isFirstCollapseOpen);
  };

  const handleSecondCollapse = () => {
    setIsSecondCollapseOpen(!isSecondCollapseOpen);
  };

  const handleThirdCollapse = () => {
    setIsThirdCollapseOpen(!isThirdCollapseOpen);
  };

  const handleFourthCollapse = () => {
    setIsFourthCollapseOpen(!isFourthCollapseOpen);
  };

  const handleFifthCollapse = () => {
    setIsFifthCollapseOpen(!isFifthCollapseOpen);
  };

  const handleSixthCollapse = () => {
    setIsSixthCollapseOpen(!isSixthCollapseOpen);
  };

  const handleSeventhCollapse = () => {
    setIsSeventhCollapseOpen(!isSeventhCollapseOpen);
  };

  const handleEighthCollapse = () => {
    setIsEighthCollapseOpen(!isEighthCollapseOpen);
  };

  const handleNinthCollapse = () => {
    setIsNinthCollapseOpen(!isNinthCollapseOpen);
  };

  // const handleTenthCollapse = () => {
  //   setIsTenthCollapseOpen(!isTenthCollapseOpen);
  // };

  return (
    <>
      <div className="position-relative" data-aos="fade-up" data-aos-duration="1000">
        <Image
          className="img-fluid"
          src={mktImg}
          alt="Imagem de Criação de Sites"
        />
        <div className="position-absolute top-0 start-0">
          <Container className="p-3">
            <div className="d-flex flex-column align-items-start">
              <TitleMark className="text-center text-md-left">
                Marketing Digital
              </TitleMark>
              <Text className="text-center text-md-left custom-text">
                Na DDS Agência de Desenvolvimento, sabemos que uma presença
                online eficaz é essencial para o crescimento dos negócios. É por
                isso que oferecemos um conjunto abrangente de serviços de
                marketing digital, projetados para ajudar sua marca a se
                destacar no mundo digital.
              </Text>
            </div>
          </Container>
        </div>
      </div>

      <TextImportancia>
        <Container className="py-5 text-center" data-aos="fade-left" data-aos-duration="1000">
          <h3 style={{ color: "#87179D" }}>
            Como funciona o Processo na Agência de Marketing Digital – DDS
          </h3>
        </Container>
      </TextImportancia>
      <div className="container" data-aos="zoom-in" data-aos-duration="1000">
        <div className="row">
          <div className="col-md-4" data-aos="fade-right" data-aos-duration="1000">
            <div className="text-center">
              <img
                src={Alinhamento}
                alt="Imagem 1"
                className="img-fluid"
              />
              <h4 className="text-uppercase">Alinhamento com o Time</h4>
              <p>
                O primeiro passo para o sucesso é o alinhamento perfeito entre
                as equipes de marketing e vendas. Na DDS, trabalhamos em
                harmonia para garantir que as estratégias de marketing estejam
                em sintonia com os objetivos de vendas, proporcionando
                resultados reais e mensuráveis.
              </p>
              <ul className="list-unstyled">
                <li>
                  <span className="bullet"></span>Equilíbrio e União entre MKT e
                  Vendas
                </li>
                <li>
                  <span className="bullet"></span>Alinhamento de MQL e SQL
                </li>
                <li>
                  <span className="bullet"></span>Definição de Processos
                </li>
                <li>
                  <span className="bullet"></span>Definição de Investimentos
                </li>
                <li>
                  <span className="bullet"></span>Metas e Desafios Encontrados
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center" data-aos="fade-right" data-aos-duration="1000">
              <img
                src={Estrategia}
                alt="Imagem 2"
                className="img-fluid"
              />
              <h4 className="text-uppercase">Estratégias Personalizadas</h4>
              <p>
                Na DDS, entendemos que cada cliente é único e possui
                necessidades específicas. É por isso que nossas estratégias são
                totalmente personalizadas, levando em consideração o perfil do
                seu público-alvo, o setor de atuação e as metas do seu negócio.
                Com soluções sob medida, sua marca alcançará resultados
                surpreendentes no mundo digital.
              </p>
              <ul className="list-unstyled">
                <li>
                  <span className="bullet"></span>Estratégias Personalizadas
                  para cada Cliente
                </li>
                <li>
                  <span className="bullet"></span>Otimização de Mídias Sociais
                </li>
                <li>
                  <span className="bullet"></span>Campanhas Direcionadas
                </li>
                <li>
                  <span className="bullet"></span>Análise de Resultados e
                  Ajustes
                </li>
                <li>
                  <span className="bullet"></span>Maximize seu ROI com nossas
                  Estratégias
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-right" data-aos-duration="1000">
            <div className="text-center">
              <img
                src={Relacionamento}
                alt="Imagem 3"
                className="img-fluid"
              />
              <h4 className="text-uppercase">Relacionamento e Resultados</h4>
              <p>
                Acreditamos no poder das parcerias duradouras. Na DDS, não
                apenas criamos estratégias, mas também nos dedicamos a construir
                relacionamentos sólidos com nossos clientes. Estamos empenhados
                em alcançar resultados excepcionais e acompanhamos de perto o
                desempenho de cada ação implementada. Nossa missão é fazer parte
                do seu sucesso e levar sua marca ao topo.
              </p>
              <ul className="list-unstyled">
                <li>
                  <span className="bullet"></span>Construção de Relacionamentos
                  Sólidos
                </li>
                <li>
                  <span className="bullet"></span>Acompanhamento de Resultados
                </li>
                <li>
                  <span className="bullet"></span>Metas Alcançadas e Superadas
                </li>
                <li>
                  <span className="bullet"></span>Crescimento e Impacto no
                  Mercado
                </li>
                <li>
                  <span className="bullet"></span>Seu Sucesso é o Nosso Sucesso!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="form-group container mb-4 mt-5" data-aos="flip-right" data-aos-duration="1000">
        <h2 className="text-center mt-5 mb-5" style={{ color: "#87179D" }}>
          Perguntas Frequentes
        </h2>
        <div className="row">
          <div className="col-lg">
            <Card className="mb-2">
              <Card.Title
                variant="link"
                onClick={handleFirstCollapse}
                aria-controls="first-collapse"
                aria-expanded={isFirstCollapseOpen}
                className="d-flex justify-content-between"
              >
                <StyledButton
                  variant="link"
                  onClick={handleFirstCollapse}
                  aria-controls="first-collapse"
                  aria-expanded={isFirstCollapseOpen}
                  className="d-flex align-items-center text-uppercase pl-5 cursor-pointer"
                >
                  O que faz uma Agência de MKT Digital ?
                </StyledButton>
                <CollapseOpen>{isFirstCollapseOpen ? "-" : "+"}</CollapseOpen>
              </Card.Title>

              <StyledCollapse in={isFirstCollapseOpen}>
                <div id="first-collapse">
                  <Card.Body>
                    O papel da agência de Marketing digital é planejar e
                    executar uma estratégia de MKT alinhada com os objetivos da
                    sua empresa (Posicionamento da Marca – Brand Awareness,
                    Geração de Leads, Alinhamento da comunicação com o
                    consumidor, entre outras). Além disso, trabalhar o
                    alinhamento entre as equipes de Marketing e Vendas
                    (comercial), estruturar softwares para integrar e
                    automatizar os setores, fornecer relatórios / dados...
                  </Card.Body>
                </div>
              </StyledCollapse>
            </Card>

            <Card className="mb-2">
              <Card.Title
                variant="link"
                onClick={handleSecondCollapse}
                aria-controls="second-collapse"
                aria-expanded={isSecondCollapseOpen}
                className="d-flex justify-content-between"
              >
                <StyledButton
                  variant="link"
                  onClick={handleSecondCollapse}
                  aria-controls="second-collapse"
                  aria-expanded={isSecondCollapseOpen}
                  className="d-flex align-items-center text-uppercase pl-5 cursor-pointer"
                >
                  FAZEM LANÇAMENTO DE INFO PRODUTOS?
                </StyledButton>
                <CollapseOpen>{isSecondCollapseOpen ? "-" : "+"}</CollapseOpen>
              </Card.Title>

              <StyledCollapse in={isSecondCollapseOpen}>
                <div id="second-collapse">
                  <Card.Body>
                    SIM. Nossa agência possui toda a infraestrutura e
                    conhecimento necessários para lançamentos de info produtos.
                    Metodologias como Fórmula de Lançamento, e Lançamento
                    Meteórico são planejadas e botadas em prática para a sua
                    segurança.
                  </Card.Body>
                </div>
              </StyledCollapse>
            </Card>

            <Card className="mb-2">
              <Card.Title
                variant="link"
                onClick={handleThirdCollapse}
                aria-controls="third-collapse"
                aria-expanded={isThirdCollapseOpen}
                className="d-flex justify-content-between"
              >
                <StyledButton
                  variant="link"
                  onClick={handleThirdCollapse}
                  aria-controls="third-collapse"
                  aria-expanded={isThirdCollapseOpen}
                  className="d-flex align-items-center text-uppercase pl-5 cursor-pointer"
                >
                  O QUE SÃO CAMPANHAS DE MÍDIA ONLINE?
                </StyledButton>
                <CollapseOpen>{isThirdCollapseOpen ? "-" : "+"}</CollapseOpen>
              </Card.Title>

              <StyledCollapse in={isThirdCollapseOpen}>
                <div id="third-collapse">
                  <Card.Body>
                    São anúncios feitos para um produto ou serviço da sua
                    empresa em canais como: Programática, Google ADS, Facebook,
                    Instagram, Twitter e Linkedin. O objetivo é gerar
                    conhecimento, Leads e Vendas. Sua empresa deve destinar um
                    valor mensal para a plataforma escolhida e faremos toda a
                    gestão da ferramenta.
                  </Card.Body>
                </div>
              </StyledCollapse>
            </Card>
          </div>
          <div className="col-lg">
            <Card className="mb-2">
              <Card.Title
                variant="link"
                onClick={handleFourthCollapse}
                aria-controls="fourth-collapse"
                aria-expanded={isFourthCollapseOpen}
                className="d-flex justify-content-between"
              >
                <StyledButton
                  variant="link"
                  onClick={handleFourthCollapse}
                  aria-controls="fourth-collapse"
                  aria-expanded={isFourthCollapseOpen}
                  className="d-flex align-items-center text-uppercase pl-5 cursor-pointer"
                >
                  O QUE É AUTOMAÇÃO DE MARKETING DIGITAL?
                </StyledButton>
                <CollapseOpen>{isFourthCollapseOpen ? "-" : "+"}</CollapseOpen>
              </Card.Title>

              <StyledCollapse in={isFourthCollapseOpen}>
                <div id="fourth-collapse">
                  <Card.Body>
                    É o uso de tecnologias (softwares) para automatizar
                    processos manuais, aumentar a produtividade da equipe de
                    Marketing e aumentar os resultados (eficiência das ações de
                    Marketing Digital). Tem como objetivo nutrir e avançar os
                    leads até o momento de compra. Podemos citar ferramentas
                    como RD Station, SharpSpring e HubSpot.
                  </Card.Body>
                </div>
              </StyledCollapse>
            </Card>

            <Card className="mb-2">
              <Card.Title
                variant="link"
                onClick={handleFifthCollapse}
                aria-controls="fifth-collapse"
                aria-expanded={isFifthCollapseOpen}
                className="d-flex justify-content-between"
              >
                <StyledButton
                  variant="link"
                  onClick={handleFifthCollapse}
                  aria-controls="fifth-collapse"
                  aria-expanded={isFifthCollapseOpen}
                  className="d-flex align-items-center text-uppercase pl-5 cursor-pointer"
                >
                  O QUE É SEO E PARA QUE SERVE?
                </StyledButton>
                <CollapseOpen>{isFifthCollapseOpen ? "-" : "+"}</CollapseOpen>
              </Card.Title>

              <StyledCollapse in={isFifthCollapseOpen}>
                <div id="fifth-collapse">
                  <Card.Body>
                    Podemos definir como um conjunto de estratégias on-page e
                    off-page para posicionar seu site nos principais motores de
                    buscas da internet. Imagina que sua empresa passa 24h por
                    dia posicionada gratuitamente com um “anúncio” para os
                    potenciais clientes que estão procurando pelo seu produto ou
                    serviço. É considerada a melhor das estratégias pois reduz o
                    custo com a aquisição de novos clientes e reduz o
                    investimento em mídia feito pela empresa.
                  </Card.Body>
                </div>
              </StyledCollapse>
            </Card>

            <Card className="mb-2">
              <Card.Title
                variant="link"
                onClick={handleSixthCollapse}
                aria-controls="sixth-collapse"
                aria-expanded={isSixthCollapseOpen}
                className="d-flex justify-content-between"
              >
                <StyledButton
                  variant="link"
                  onClick={handleSixthCollapse}
                  aria-controls="sixth-collapse"
                  aria-expanded={isSixthCollapseOpen}
                  className="d-flex align-items-center text-uppercase pl-5 cursor-pointer"
                >
                  QUANTO CUSTA CONTRATAR UMA AGÊNCIA DE MKT DIGITAL ?
                </StyledButton>
                <CollapseOpen>{isSixthCollapseOpen ? "-" : "+"}</CollapseOpen>
              </Card.Title>

              <StyledCollapse in={isSixthCollapseOpen}>
                <div id="sixth-collapse">
                  <Card.Body>
                    Isso depende muito. Existem diversos fatores que impactam
                    nessa resposta. Na maioria das vezes, contratar uma agência
                    de MKT é mais vantajoso do que internalizar uma equipe. Com
                    o valor de um Time completo de Marketing a agência oferece
                    todos os serviços por uma fração do investimento se você
                    fosse contratar uma equipe completa (Analistas de MKT,
                    Analistas de Mídia, Designers, Redatores, BI, Programadores,
                    Atendimento, Gestor de conta…).
                  </Card.Body>
                </div>
              </StyledCollapse>
            </Card>
          </div>
          <div className="col">
            <Card className="mb-2">
              <Card.Title
                variant="link"
                onClick={handleSeventhCollapse}
                aria-controls="seventh-collapse"
                aria-expanded={isSeventhCollapseOpen}
                className="d-flex justify-content-between"
              >
                <StyledButton
                  variant="link"
                  onClick={handleSeventhCollapse}
                  aria-controls="seventh-collapse"
                  aria-expanded={isSeventhCollapseOpen}
                  className="d-flex align-items-center text-uppercase pl-5 cursor-pointer"
                >
                  AS REDES SOCIAIS REALMENTE PODEM AJUDAR?
                </StyledButton>
                <CollapseOpen>{isSeventhCollapseOpen ? "-" : "+"}</CollapseOpen>
              </Card.Title>

              <StyledCollapse in={isSeventhCollapseOpen}>
                <div id="seventh-collapse">
                  <Card.Body>
                    Depende de alguns fatores. Primeiramente temos que avaliar
                    seu público e perfil ideal de cliente. Entender se esse
                    canal é o local ideal para impactá-los e de que forma eles
                    interagem. Qual é o objetivo? Somente fazer postagens sem
                    uma estratégia efetiva não trará resultados em vendas para
                    sua empresa. Existem maneiras assertivas de trabalharmos nas
                    redes sociais com maior eficiência e objetivo de vendas.
                  </Card.Body>
                </div>
              </StyledCollapse>
            </Card>

            <Card className="mb-2">
              <Card.Title
                variant="link"
                onClick={handleEighthCollapse}
                aria-controls="eighth-collapse"
                aria-expanded={isEighthCollapseOpen}
                className="d-flex justify-content-between"
              >
                <StyledButton
                  variant="link"
                  onClick={handleEighthCollapse}
                  aria-controls="eighth-collapse"
                  aria-expanded={isEighthCollapseOpen}
                  className="d-flex align-items-center text-uppercase pl-5 cursor-pointer"
                >
                  MINHA EMPRESA REALMENTE PRECISA DE UM BLOG ?
                </StyledButton>
                <CollapseOpen>{isEighthCollapseOpen ? "-" : "+"}</CollapseOpen>
              </Card.Title>

              <StyledCollapse in={isEighthCollapseOpen}>
                <div id="eighth-collapse">
                  <Card.Body>
                    SIM. O posicionamento orgânico do seu website através de um
                    blog é muito importante. No Blog você consegue se aprofundar
                    em assuntos que , na maioria das vezes, não é possível
                    dentro do seu website. Gerar conteúdo de qualidade e extenso
                    é uma forma de ganhar autoridade e posicionamento digital
                    para diversas palavras-chave importantes para o seu negócio.
                    Não negligencie a utilização do blog e, se for para fazer,
                    que faça bem feito para ter a imagem da sua empresa
                    realmente valorizada.
                  </Card.Body>
                </div>
              </StyledCollapse>
            </Card>

            <Card className="mb-2">
              <Card.Title
                variant="link"
                onClick={handleNinthCollapse}
                aria-controls="ninth-collapse"
                aria-expanded={handleNinthCollapse}
                className="d-flex justify-content-between"
              >
                <StyledButton
                  variant="link"
                  onClick={handleNinthCollapse}
                  aria-controls="ninth-collapse"
                  aria-expanded={isNinthCollapseOpen}
                  className="d-flex align-items-center text-uppercase pl-5 cursor-pointer"
                >
                  E-MAIL MARKETING AINDA É IMPORTANTE ?
                </StyledButton>
                <CollapseOpen>{isNinthCollapseOpen ? "-" : "+"}</CollapseOpen>
              </Card.Title>

              <StyledCollapse in={isNinthCollapseOpen}>
                <div id="ninth-collapse">
                  <Card.Body>
                    SIM, desde que se faça da forma correta. Você deve ter ou
                    construir uma lista com base na segmentação de produtos e
                    serviços oferecidos pela sua empresa. O E-mail Marketing é
                    uma ótima ferramenta de relacionamento e vendas e o canal
                    que ainda possui a maior taxa de conversões nas estratégias.
                  </Card.Body>
                </div>
              </StyledCollapse>
            </Card>

            {/* <Card className="mb-2">
              <Card.Title
                variant="link"
                onClick={handleTenthCollapse}
                aria-controls="tenth-collapse"
                aria-expanded={isTenthCollapseOpen}
                className="d-flex justify-content-between"
              >
                <StyledButton
                  variant="link"
                  onClick={handleTenthCollapse}
                  aria-controls="tenth-collapse"
                  aria-expanded={isTenthCollapseOpen}
                  className="d-flex align-items-center text-uppercase pl-5 cursor-pointer"
                >
                  EU PRECISO USAR GOOGLE ADS + SEO NA ESTRATÉGIA ?
                </StyledButton>
                <CollapseOpen>{isTenthCollapseOpen ? "-" : "+"}</CollapseOpen>
              </Card.Title>

              <StyledCollapse in={isTenthCollapseOpen}>
                <div id="tenth-collapse">
                  <Card.Body>
                    Em tese sim, você deveria aproveitar os dois pois são duas
                    das principais estratégias do SEM (search engine marketing).
                    Ambas estão baseadas na escolha de palavras-chave e se você
                    se preocupa com o crescimento da empresa e o controle sobre
                    seu mercado, você terá que fazer as duas. O Google ADS trará
                    resultados imediatos e o SEO trará resultados no longo
                    prazo, porém muito mais duradouros e interesssantes.
                  </Card.Body>
                </div>
              </StyledCollapse>
            </Card> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketingDigital;
