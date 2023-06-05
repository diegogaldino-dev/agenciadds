import React from "react";
import { Carousel, Card } from "react-bootstrap";
import CarouselHome from "./Carrousel/CarouselHome";
import Marquee from "react-fast-marquee";


import ViraFesta from "../../img/parceiros/vira.png";
import Polly from "../../img/parceiros/polly.png";
import Allblocks from "../../img/parceiros/all.png";
import Kiterapias from "../../img/parceiros/ki.png";
import SerralheriaJarim from "../../img/parceiros/serralheria.png";




import {LogoImage, PIcon, CodeIcon, GlobeIcon, PaintBrushIcon} from "./style";

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
        {/* Adicione mais logos aqui */}
      </Marquee>
      </div>

      <section className="my-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row">
        <div className="col-md-4">
          <Card>
            <Card.Body>
              <Card.Title>
                <p>
                <PIcon><CodeIcon className="mr-2" /></PIcon>
                </p>
                Desenvolvimento de Sites
              </Card.Title>
              <Card.Text>
                We offer professional web development services to create
                responsive and user-friendly websites tailored to your
                specific needs.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <Card.Body>
              <Card.Title>
              <p>
              <PIcon><GlobeIcon className="mr-2" /></PIcon>
              <PIcon><GlobeIcon className="mr-2" /></PIcon>
              </p>
                Marketing Digital
              </Card.Title>
              <Card.Text>
                Our team specializes in developing mobile applications for
                iOS and Android platforms, providing seamless and engaging
                user experiences.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <Card.Body>
              <Card.Title>
                <p>
                <PIcon><PaintBrushIcon className="mr-2" /></PIcon>
                </p>
                Midia Digital
              </Card.Title>
              <Card.Text>
                Our skilled designers create visually appealing and
                intuitive user interfaces, ensuring a delightful user
                experience for your applications and websites.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>

    <section className="my-5">
      <h5 className="text-center mb-4">Portfolio !</h5>
      <h1 className="text-center mb-4">Alguns trabalhos</h1>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="Project 1" />
          <Carousel.Caption className="carousel-caption">
            <h3>Project 1</h3>
            <p>Project description</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="Project 2" />
          <Carousel.Caption className="carousel-caption">
            <h3>Project 2</h3>
            <p>Project description</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="Project 3" />
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
