import React from "react";
import { Carousel } from "react-bootstrap";
import { ImagemCarrousel } from "./style";

import Imagem1 from "../../../img/slide/c2.png";
import Imagem2 from "../../../img/slide/s.png";
import Imagem3 from "../../../img/slide/c3.png";

const CarouselHome = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <a href="https://wa.me/5511978788732" target="_blank" rel="noopener noreferrer">
          <ImagemCarrousel
            className="d-block w-100"
            src={Imagem1}
            alt="Slide 1"
            fluid
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://wa.me/5511978788732" target="_blank" rel="noopener noreferrer">
          <ImagemCarrousel
            className="d-block w-100"
            src={Imagem2}
            alt="Slide 2"
            fluid
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://wa.me/5511978788732" target="_blank" rel="noopener noreferrer">
          <ImagemCarrousel
            className="d-block w-100"
            src={Imagem3}
            alt="Slide 3"
            fluid
          />
        </a>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHome;
