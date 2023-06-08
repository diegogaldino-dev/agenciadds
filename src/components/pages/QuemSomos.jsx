import React from "react";
import criacaoImg from "../../img/code-1839406_1280.jpg";
import { ImageQuemSomos, Title } from "./style";
import {
  FaInstagram,
  FaFacebookSquare,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const QuemSomos = () => {
  return (
    <>
      <div className="position-relative">
        <ImageQuemSomos
          className="img-fluid"
          src={criacaoImg}
          alt="Imagem de Criação de Sites"
        />
        <div className="position-absolute top-0 start-0 mt-5">
          <div className="container">
            <div
              className="d-flex flex-column align-items-start"
              style={{ marginLeft: "120px" }}
            >
              <Title>Quem Somos</Title>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="card shadow-lg" style={{ width: "300px" }}>
          <img
            className="card-img-top"
            src="https://via.placeholder.com/300x300"
            alt="Member 1"
            style={{ width: "300px", height: "300px" }}
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="social">
              <a href="#">
                <FaInstagram />
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#">
                <FaInstagram />
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <FaInstagram />
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <FaInstagram />
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuemSomos;
