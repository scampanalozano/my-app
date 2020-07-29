import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './Header.css';
import logo from './logo.PNG'
import Image from 'react-bootstrap/Image'
import { Link } from "react-router-dom";

const Header = () => { //functional componenet
  return (
    <Row>
      <Col>
        <Row>
          <Col>
            <Image className="logo"
              src={logo}
              fluid
            /></Col>
        </Row>
        <Row>
          <Col>
            {navigationBar()}
          </Col>
        </Row>

      </Col>
    </Row>
  );
}
//TODO: verificar estilos y verificar mayusculas y minisculas en las rutas
const navigationBar = () => {
  return (
    <Navbar expand="sm" variant="dark" className="Header-banner">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#"><Link to="/">Inicio</Link></Nav.Link>
          <Nav.Link href="#"><Link to="/QuienesSomos">¿Quienes Somos?</Link></Nav.Link>
          <Nav.Link href="#"><Link to="/actividades">Actividades</Link></Nav.Link>
          <Nav.Link href="#"><Link to="/lunchs">Lunchs</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
}



export default Header;// para que este disponible para otros archivos 