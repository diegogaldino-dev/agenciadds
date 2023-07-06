import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import {
  TextLogo,
  StyledNavDropdown,
  StyledNavbar,
  TextContainer,
} from "./style";
import { Link } from "react-router-dom";

import Logo from "../../img/logo_oficial 1.svg";

const NavBar = () => {
  return (
    <StyledNavbar bg="" expand="lg" className="shadow-sm">
      <Navbar.Brand href="/">
        <div
          style={{
            marginLeft: "40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={Logo} alt="" style={{ width: "100px" }} />
          <TextLogo>DDS - Agencia de Desenvolvimento</TextLogo>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link as={Link} to="/">
            <TextContainer>Inicio</TextContainer>
          </Nav.Link>
          <Nav.Link as={Link} to="/quem-somos">
            <TextContainer>Quem Somos</TextContainer>
          </Nav.Link>
          <Nav.Link as={Link} to="/contato">
            <TextContainer>Contato</TextContainer>
          </Nav.Link>
          <StyledNavDropdown title="Tipos de Serviços" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} alt="Criação de Sites" to="/criacao-de-sites">
              Criação de Sites
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/marketing-digital">
              Marketing Digital
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/social-midia">
              Social Mídia
            </NavDropdown.Item>
          </StyledNavDropdown>
        </Nav>
        <Nav className="ml-auto" style={{ paddingRight: "10px" }}>
          <Nav.Link href="https://www.facebook.com/profile.php?id=100093569524691&mibextid=ZbWKwL" target="_blank">
            <FaFacebook color="#fff" />
          </Nav.Link>
          <Nav.Link href="https://www.instagram.com/dds_desenvolvimento/" target="_blank">
            <FaInstagram color="#fff" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </StyledNavbar>
  );
};

export default NavBar;
