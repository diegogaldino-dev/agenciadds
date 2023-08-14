import React from "react";
import { Carousel } from "react-bootstrap";
import { ImagemCarrousel, CarouselCaption, CarouselTitle, CarouselText } from "./style";

import Imagem1 from "../../../img/slide/c2.jpg";
import Imagem2 from "../../../img/slide/s.jpg";
import Imagem3 from "../../../img/slide/m.jpg";

const CarouselHome = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <ImagemCarrousel
          className="d-block w-100"
          src={Imagem1}
          alt="Slide 1"
          fluid
        />
        <CarouselCaption className="carousel-caption">
          <CarouselTitle>Transforme sua Presença Online</CarouselTitle>
          <CarouselText>Sites Impactantes, Mídias Sociais Estratégicas e Marketing Digital de Resultados</CarouselText>
        </CarouselCaption>
      </Carousel.Item>
      <Carousel.Item>
        <ImagemCarrousel
          className="d-block w-100"
          src={Imagem2}
          alt="Slide 2"
          fluid
        />
        <CarouselCaption className="carousel-caption">
          <CarouselTitle>Conquiste a Atenção das Redes Sociais</CarouselTitle>
          <CarouselText>Campanhas Criativas que Geram Engajamento e Crescimento</CarouselText>
        </CarouselCaption>
      </Carousel.Item>
      <Carousel.Item>
        <ImagemCarrousel
          className="d-block w-100"
          src={Imagem3}
          alt="Slide 3"
          fluid
        />
        <CarouselCaption className="carousel-caption">
          <CarouselTitle>Alcance Seu Público Alvo</CarouselTitle>
          <CarouselText>Estratégias Digitais Personalizadas para Impulsionar Seus Negócios</CarouselText>
        </CarouselCaption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHome;
