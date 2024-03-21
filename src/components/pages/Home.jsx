import React, { useEffect } from "react";
import {
  Carousel,
  // Card
} from "react-bootstrap";
import CarouselHome from "./Carrousel/CarouselHome";
import Marquee from "react-fast-marquee";

import ViraFesta from "../../img/parceiros/vira.png";
import Polly from "../../img/parceiros/polly.png";
import Allblocks from "../../img/parceiros/all.png";
import Kiterapias from "../../img/parceiros/ki.png";
import SerralheriaJarim from "../../img/parceiros/serralheria.png";

import Template1 from "../../img/templates/1.png";
import Template2 from "../../img/templates/2.png";
import Template3 from "../../img/templates/3.png";

import Tipo from "./TipoServico";

import {
  LogoImage,
  // GlobeIcon,
  // PaintBrushIcon,
} from "./style";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
    // Adicione o código de rastreamento do Google Analytics aqui
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-RHJ8R95WMZ";
    document.head.appendChild(script1);

    script1.onload = () => {
      const script2 = document.createElement("script");
      script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-RHJ8R95WMZ');
  `;
      document.head.appendChild(script2);
    };
  }, []);
  return (
    <div>
      <CarouselHome />

      <div className="container">
        <div className="mt-5" data-aos="zoom-in" data-aos-duration="2000">
          <Marquee gradient={true} speed={100}>
            <LogoImage src={ViraFesta} alt="Logo 1" />
            <LogoImage src={Polly} alt="Logo 2" />
            <LogoImage src={SerralheriaJarim} alt="Logo 3" />
            <LogoImage src={Kiterapias} alt="Logo 4" />
            <LogoImage src={Allblocks} alt="Logo 5" />
            {/* Add more logos here */}
          </Marquee>
        </div>
      </div>
      <Tipo />

      <div className="container">
        <section className="my-5">
          <h5
            className="text-center mb-4"
            data-aos="zoom-out-up"
            data-aos-duration="800"
          >
            Portfolio!
          </h5>
          <h1 className="text-center mb-4">Alguns trabalhos</h1>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={Template1} alt="Project 1" />
              <Carousel.Caption className="carousel-caption">
                {/* <h3>Project 1</h3>
                <p>Project description</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Template2} alt="Project 2" />
              <Carousel.Caption className="carousel-caption">
                {/* <h3>Project 2</h3>
                <p>Project description</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Template3} alt="Project 3" />
              <Carousel.Caption className="carousel-caption">
                {/* <h3>Project 3</h3>
                <p>Project description</p> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>
      </div>
    </div>
  );
};

export default Home;
