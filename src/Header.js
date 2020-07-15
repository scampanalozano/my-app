import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './Header.css';

const Header = () =>   {
  return (
    <Row>
      <Col>
        <Row>
          <Col className="titulo">Funny Moms</Col>
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

const navigationBar = () => {
  return (
    
      <Navbar expand="sm" variant="dark" className="Header-banner">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">HOME</Nav.Link>
            <Nav.Link href="/QuienesSomos">Quienes Somos?</Nav.Link>
            <Nav.Link href="/actividades">Actividades</Nav.Link>
            <Nav.Link href="/lunchs">Lunchs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default Header;// para que este disponible para otros archivos 