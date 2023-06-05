import React from "react";
import { Carousel } from "react-bootstrap";
import { ImagemCarrousel, CarouselCaption, CarouselTitle, CarouselText } from "./style";

import Imagem1 from "../../../img/img01.jpg";
import Imagem2 from "../../../img/img02.jpg";
import Imagem3 from "../../../img/img03.jpg";

const CarouselHome = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <ImagemCarrousel
          className="d-block w-100"
          src={Imagem1}
          alt="Slide 1"
        />
       <CarouselCaption className="carousel-caption">
          <CarouselTitle>Slide 1</CarouselTitle>
          <CarouselText>Text for slide 1</CarouselText>
        </CarouselCaption>
      </Carousel.Item>
      <Carousel.Item>
        <ImagemCarrousel
          className="d-block w-100"
          src={Imagem2}
          alt="Slide 2"
        />
        <CarouselCaption className="carousel-caption">
          <CarouselTitle>Slide 2</CarouselTitle>
          <CarouselText>Text for slide 2</CarouselText>
        </CarouselCaption>
      </Carousel.Item>
      <Carousel.Item>
        <ImagemCarrousel
          className="d-block w-100"
          src={Imagem3}
          alt="Slide 3"
        />
        <CarouselCaption className="carousel-caption">
          <CarouselTitle>Slide 3</CarouselTitle>
          <CarouselText>Text for slide 3</CarouselText>
        </CarouselCaption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHome;
