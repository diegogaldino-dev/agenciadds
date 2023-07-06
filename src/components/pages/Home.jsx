import React from "react";
import { Carousel, 
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


import Cards from "./Cards/Cards";

import {
  LogoImage,
  // PIcon,
  // // CodeIcon,
  // GlobeIcon,
  // PaintBrushIcon,
} from "./style";

const Home = () => {
  return (
    <div>
      <CarouselHome />
      <div className="container">
        <div>
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
                  description="We offer professional web development services to create responsive and user-friendly websites tailored to your specific needs."
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
                  description="Our team specializes in developing mobile applications for iOS and Android platforms, providing seamless and engaging user experiences."
                />
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-12 col-12 my-4"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <Cards
                  name="Mídia Digital"
                  image={social}
                  alt=""
                  description="Our skilled designers create visually appealing and intuitive user interfaces, ensuring a delightful user experience for your applications and websites."
                />
              </div>
            </div>
          </div>
        </section>

        <section className="my-5">
          <h5 className="text-center mb-4">Portfolio!</h5>
          <h1 className="text-center mb-4">Alguns trabalhos</h1>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400"
                alt="Project 1"
              />
              <Carousel.Caption className="carousel-caption">
                <h3>Project 1</h3>
                <p>Project description</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400"
                alt="Project 2"
              />
              <Carousel.Caption className="carousel-caption">
                <h3>Project 2</h3>
                <p>Project description</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400"
                alt="Project 3"
              />
              <Carousel.Caption className="carousel-caption">
                <h3>Project 3</h3>
                <p>Project description</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>
      </div>
    </div>
  );
};

export default Home;
