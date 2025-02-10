import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { ImagemCarrousel } from "./style";

import Imagem1 from "../../../img/slide/c2.png";
import Imagem2 from "../../../img/slide/s.png";
import Imagem3 from "../../../img/slide/c3.png";

import Imagem1Mobile from "../../../img/slide1_mobile.png";
import Imagem2Mobile from "../../../img/slide2_mobile.png";
import Imagem3Mobile from "../../../img/slide3_mobile.png";

const CarouselHome = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 576);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 576);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Carousel>
      <Carousel.Item>
        <a href="https://wa.me/5511978788732" target="_blank" rel="noopener noreferrer">
          <ImagemCarrousel
            className="d-block w-100"
            src={isMobile ? Imagem1Mobile : Imagem1}
            alt="Slide 1"
            fluid
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://wa.me/5511978788732" target="_blank" rel="noopener noreferrer">
          <ImagemCarrousel
            className="d-block w-100"
            src={isMobile ? Imagem2Mobile : Imagem2}
            alt="Slide 2"
            fluid
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://wa.me/5511978788732" target="_blank" rel="noopener noreferrer">
          <ImagemCarrousel
            className="d-block w-100"
            src={isMobile ? Imagem3Mobile : Imagem3}
            alt="Slide 3"
            fluid
          />
        </a>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHome;
