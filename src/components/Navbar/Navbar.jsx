import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import {LogoImage, NavRedes} from './style'
import { Link } from 'react-router-dom';

import Logo from '../../img/logo_oficial 1.svg'


const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg"  className="shadow-sm">
      <Navbar.Brand href="/">
        <LogoImage
          src={Logo}  // substitua pelo caminho da imagem do seu logotipo
          height="60"
          className="d-inline-block align-top"
          alt="Logo"
        />
        <span>DDS - Agencia de Desenvolvimento</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">        
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          <Nav.Link as={Link} to="/quem-somos">Quem Somos</Nav.Link>
          <Nav.Link as={Link} to="/contato">Contato</Nav.Link>
          <NavDropdown title="Tipos de Serviços" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} alt="Criação de Sites" to="/criacao-de-sites">Criação de Sites</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/marketing-digital">Marketing Digital</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/social-midia">Social Midia</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <NavRedes>
          <Nav.Link href="#"><FaFacebook /></Nav.Link>
          <Nav.Link href="#"><FaInstagram /></Nav.Link>
        </NavRedes>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
