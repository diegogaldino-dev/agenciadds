import React from "react";
import { StyledFooter, LinkWithoutUnderline } from "./style";
import { FaFacebookSquare, FaInstagram, FaPhone, FaEnvelope, FaCode, FaMobileAlt, FaPalette } from "react-icons/fa";
import {TiGroup} from "react-icons/ti"
import {BsFillChatDotsFill} from 'react-icons/bs'
import { ImCalculator } from 'react-icons/im';


import Logo from "../../img/logo_oficial 1.svg";

function Footer() {
  return (
    <StyledFooter className="text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <div className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto" style={{ width: "150px", height: "150px" }}>
              <img src={Logo} height="70" alt="" loading="lazy" />
            </div>
            <p className="text-center">DDS - Agência de Desenvolvimento</p>
            <ul className="list-unstyled d-flex flex-row justify-content-center">
              <li>
                <a className="text-white px-2" href="#!">
                  <FaFacebookSquare />
                </a>
              </li>
              <li>
                <a className="text-white px-2" href="#!">
                  <FaInstagram />
                </a>
              </li>              
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="mb-4">A Agência</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <LinkWithoutUnderline href="#!" className="text-white">
                <TiGroup  />
                  <span className="pe-3" />
                  Quem Somos
                </LinkWithoutUnderline>
              </li>
              <li className="mb-2">
                <LinkWithoutUnderline href="#!" className="text-white">
                  <BsFillChatDotsFill  />
                  <span className="pe-3" />
                  Depoimentos
                </LinkWithoutUnderline>
              </li>
              <li className="mb-2">
                <LinkWithoutUnderline href="#!" className="text-white">
                  <ImCalculator/>
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
                <LinkWithoutUnderline href="#!" className="text-white">
                  <FaCode/>
                  <span className="pe-3" />
                  Criação de sites
                </LinkWithoutUnderline>
              </li>
              <li className="mb-2">
                <LinkWithoutUnderline href="#!" className="text-white">
                  <FaMobileAlt/>
                  <span className="pe-3" />
                  Marketing Digital
                </LinkWithoutUnderline>
              </li>
              <li className="mb-2">
                <LinkWithoutUnderline href="#!" className="text-white">
                  <FaPalette />
                  <span className="pe-3" />
                  Midia Digital
                </LinkWithoutUnderline>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="mb-4">Contato</h5>
            <ul className="list-unstyled">
              
              <li>
                <p>
                  <FaPhone className="pe-2" />
                  + 01 234 567 89
                </p>
              </li>
              <li>
                <p>
                  <FaEnvelope className="pe-2 mb-0" />
                  contact@example.com
                </p>
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
