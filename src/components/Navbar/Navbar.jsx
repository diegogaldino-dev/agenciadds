import React, { useState } from "react";
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
  const [expanded, setExpanded] = useState(false);

  const closeNav = () => setExpanded(false);

  return (
    <StyledNavbar bg="" expand="lg" expanded={expanded} className="shadow-sm">
      <Navbar.Brand href="/">
        <div
          style={{
            marginLeft: "40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={Logo} alt="" style={{ width: "90px" }} />
          <TextLogo>DDS - Agencia de Desenvolvimento</TextLogo>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(expanded ? false : true)}
      />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-center justify-content-lg-end"
      >
        <Nav className="text-center">
          <Nav.Link as={Link} to="/" onClick={closeNav}>
            <TextContainer>Inicio</TextContainer>
          </Nav.Link>
          <Nav.Link as={Link} to="/quem-somos" onClick={closeNav}>
            <TextContainer>Quem Somos</TextContainer>
          </Nav.Link>
          <Nav.Link as={Link} to="/blog" onClick={closeNav}>
            <TextContainer>Blog</TextContainer>
          </Nav.Link>
          <Nav.Link as={Link} to="/contato" onClick={closeNav}>
            <TextContainer>Contato</TextContainer>
          </Nav.Link>
          <StyledNavDropdown title="Tipos de Serviços" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/criacao-de-sites" onClick={closeNav}>
              Criação de Sites
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/marketing-digital" onClick={closeNav}>
              Marketing Digital
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/social-media" onClick={closeNav}>
              Social Media
            </NavDropdown.Item>
          </StyledNavDropdown>
        </Nav>
        <Nav
          className="ml-auto d-flex align-items-center"
          style={{ paddingRight: "20px" }}
        >
          <div className="d-flex align-items-center">
            <Nav.Link
              href="https://www.facebook.com/profile.php?id=100093569524691&mibextid=ZbWKwL"
              target="_blank"
              className="flex-row"
              style={{ marginRight: "10px" }}
            >
              <FaFacebook color="#fff" style={{ fontSize: "24px" }} />
            </Nav.Link>
            <Nav.Link
              href="https://www.instagram.com/dds_desenvolvimento/"
              target="_blank"
              className="flex-row"
            >
              <FaInstagram color="#fff" style={{ fontSize: "24px" }} />
            </Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </StyledNavbar>
  );
};

export default NavBar;
