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

import Desen from "../../img/icons/19362653.jpg";
import social from "../../img/icons/3271883.jpg";
import marketing from "../../img/icons/5618169.jpg";

import Template1 from "../../img/templates/Para o site DDS 1.png";
import Template2 from "../../img/templates/Para o site DDS 2.png";
import Template3 from "../../img/templates/Para o site DDS 3.png";

import Cards from "./Cards/Cards";

import {
  LogoImage,
  // PIcon,
  // // CodeIcon,
  // GlobeIcon,
  // PaintBrushIcon,
} from "./style";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
    // Adicione o código de rastreamento do Google Analytics aqui
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-RHJ8R95WMZ"; // Substitua pelo seu ID de rastreamento
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-RHJ8R95WMZ"); // Substitua pelo seu ID de rastreamento
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

        <section className="my-5">
          <div className="container mx-auto my-5">
            <div className="row">
              <div className="col-12">
                <h1
                  className="text-center"
                  data-aos="zoom-out-up"
                  data-aos-duration="800"
                >
                  Tipos Serviços
                </h1>
              </div>
            </div>
            <div className="row">
              <div
                className="col-lg-4 col-md-6 col-sm-12 col-12 my-4"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <Cards
                  name="Desenvolvimento de Sites"
                  image={Desen}
                  alt=""
                  description="Transforme sua presença online com um site profissional e responsivo. Oferecemos serviços de desenvolvimento de sites sob medida para atender às suas necessidades específicas. Além disso, também realizamos atualizações em websites existentes, garantindo que sua presença digital esteja sempre atualizada e otimizada."
                  categoryLink="/criacao-de-sites" // Defina o link da categoria correspondente
                />
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-12 col-12 my-4"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <Cards
                  name="Marketing Digital"
                  image={marketing}
                  alt=""
                  description="Potencialize sua marca online com estratégias de marketing digital personalizadas. Oferecemos soluções completas e inovadoras em SEO, mídias sociais, anúncios e muito mais para impulsionar seu negócio. Mantenha sua presença digital atualizada, otimizada, competitiva e impactante com nossos serviços especializados e eficientes."
                  categoryLink="/marketing-digital" // Defina o link da categoria correspondente
                />
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-12 col-12 my-4"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <Cards
                  name="Social Mídia"
                  image={social}
                  alt=""
                  description="Aumente sua visibilidade online com estratégias personalizadas e eficientes. Oferecemos soluções inovadoras em design, SEO, mídias sociais e mais para alavancar sua marca de forma impressionante. Atualize e otimize consistentemente e proativamente sua presença digital com nossos serviços especializados e profissionais."
                  categoryLink="/social-midia" // Defina o link da categoria correspondente
                />
              </div>
            </div>
          </div>
        </section>

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
