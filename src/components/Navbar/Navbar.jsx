import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import {LogoImage, NavRedes, CustomNavbar, TextLogo, StyledNavDropdown} from './style'
import { Link } from 'react-router-dom';

import Logo from '../../img/logo_oficial 1.svg'


const NavBar = () => {
  return (
    <CustomNavbar bg="" expand="lg" className="shadow">
    <Navbar.Brand href="/">
      <LogoImage
        src={Logo} // substitua pelo caminho da imagem do seu logotipo
        height="60"
        className="d-inline-block align-top "
        alt="Logo"
      />
      <TextLogo>DDS - Agencia de Desenvolvimento</TextLogo>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/" style={{color:"#fff"}}>
          Inicio
        </Nav.Link>
        <Nav.Link as={Link} to="/quem-somos" style={{color:"#fff"}}>
          Quem Somos
        </Nav.Link>
        <Nav.Link as={Link} to="/contato" style={{color:"#fff"}}>
          Contato
        </Nav.Link>
        <StyledNavDropdown title="Tipos de Serviços" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} alt="Criação de Sites" to="/criacao-de-sites">
            Criação de Sites
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/marketing-digital" >
            Marketing Digital
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/social-midia">
            Social Midia
          </NavDropdown.Item>
        </StyledNavDropdown>
      </Nav>
      <NavRedes>
        <Nav.Link href="https://www.facebook.com/profile.php?id=100093569524691&mibextid=ZbWKwL" target="_blank">
          <FaFacebook color='#fff' />
        </Nav.Link>
        <Nav.Link href="https://www.instagram.com/dds_desenvolvimento/" target="_blank">
          <FaInstagram color='#fff'/>
        </Nav.Link>
      </NavRedes>
    </Navbar.Collapse>
  </CustomNavbar>
  );
}

export default NavBar;
