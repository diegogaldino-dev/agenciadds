import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { ImagemCarrousel } from "./style";

import Imagem1 from "../../../img/slide/c2.png";
import Imagem2 from "../../../img/slide/s.png";
import Imagem3 from "../../../img/slide/c3.png";
import Imagem4 from "../../../img/slide/1.png";
import Imagem5 from "../../../img/slide/2.png";
import Imagem6 from "../../../img/slide/3.png";


import Imagem1Mobile from "../../../img/slide1_mobile.png";
import Imagem2Mobile from "../../../img/slide2_mobile.png";
import Imagem3Mobile from "../../../img/slide3_mobile.png";
import Imagem4Mobile from "../../../img/1.png";
import Imagem5Mobile from "../../../img/2.png";
import Imagem6Mobile from "../../../img/3.png";




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

      <Carousel.Item>
        <a href="https://wa.me/5511978788732" target="_blank" rel="noopener noreferrer">
          <ImagemCarrousel
            className="d-block w-100"
            src={isMobile ? Imagem4Mobile : Imagem4}
            alt="Slide 4"
            fluid
          />
        </a>
      </Carousel.Item>

      <Carousel.Item>
        <a href="https://wa.me/5511978788732" target="_blank" rel="noopener noreferrer">
          <ImagemCarrousel
            className="d-block w-100"
            src={isMobile ? Imagem5Mobile : Imagem5}
            alt="Slide 5"
            fluid
          />
        </a>
      </Carousel.Item>

      <Carousel.Item>
        <a href="https://wa.me/5511978788732" target="_blank" rel="noopener noreferrer">
          <ImagemCarrousel
            className="d-block w-100"
            src={isMobile ? Imagem6Mobile : Imagem6}
            alt="Slide 6"
            fluid
          />
        </a>
      </Carousel.Item>


    </Carousel>
  );
};

export default CarouselHome;
