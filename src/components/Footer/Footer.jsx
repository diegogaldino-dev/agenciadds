import React from "react";
import { StyledFooter, LinkWithoutUnderline } from "./style";
import {
  FaFacebookSquare,
  FaInstagram,
  FaEnvelope,
  FaCode,
  FaMobileAlt,
  FaPalette,
  FaWhatsapp
} from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
// import { BsFillChatDotsFill } from "react-icons/bs";
import { ImCalculator } from "react-icons/im";
import { Link } from "react-router-dom";

import Logo from "../../img/logo_oficial 1.svg";

function Footer() {
  return (
    <StyledFooter className="text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <div
              className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto"
              style={{ width: "150px", height: "150px" }}
            >
              <img src={Logo} height="70" alt="" loading="lazy" />
            </div>
            <p className="text-center">DDS - Agência de Desenvolvimento</p>
            <ul className="list-unstyled d-flex flex-row justify-content-center">
              <li>
                <a className="text-white px-2" href="https://www.facebook.com/profile.php?id=100093569524691&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                  <FaFacebookSquare />
                </a>
              </li>
              <li>
                <a className="text-white px-2" href="https://www.instagram.com/dds_desenvolvimento/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="mb-4">A Agência</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <LinkWithoutUnderline as={Link} to="/quem-somos" className="text-white">
                  <TiGroup />
                  <span className="pe-3" />
                  Quem Somos
                </LinkWithoutUnderline>
              </li>
              {/* <li className="mb-2">
                <LinkWithoutUnderline as={Link} to="/depoimentos" className="text-white">
                  <BsFillChatDotsFill />
                  <span className="pe-3" />
                  Depoimentos
                </LinkWithoutUnderline>
              </li> */}
              <li className="mb-2">
                <LinkWithoutUnderline as={Link} to="/orcamento" className="text-white">
                  <ImCalculator />
                  <span className="pe-3" />
                  Orçamento
                </LinkWithoutUnderline>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="mb-4">Soluções</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <LinkWithoutUnderline as={Link} to="/criacao-de-sites" className="text-white">
                  <FaCode />
                  <span className="pe-3" />
                  Criação de sites
                </LinkWithoutUnderline>
              </li>
              <li className="mb-2">
                <LinkWithoutUnderline as={Link} to="/marketing-digital" className="text-white">
                  <FaMobileAlt />
                  <span className="pe-3" />
                  Marketing Digital
                </LinkWithoutUnderline>
              </li>
              <li className="mb-2">
                <LinkWithoutUnderline as={Link} to="/social-midia" className="text-white">
                  <FaPalette />
                  <span className="pe-3" />
                  Social Mídia
                </LinkWithoutUnderline>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="mb-4">Contato</h5>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-3">
                <FaWhatsapp size={25} className="pe-2" />
                <p className="mb-0">(11) 97878-8732</p>
              </li>
              <li className="d-flex align-items-center">
                <FaEnvelope size={25} className="pe-2 mb-0" />
                <p className="mb-0">contato@ddsdesenvolvimento.com.br</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: "#000" }}>
        DDS - Agência de Desenvolvimento © 2023 Todos os direitos reservados.
      </div>
    </StyledFooter>
  );
}

export default Footer;
