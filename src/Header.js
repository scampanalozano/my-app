import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './Header.css';
function Header() {
  return (
    <Container fluid>
      <Row>
        <Col>Funny Moms</Col>
      </Row>
      <Row>
        <Col>
          {navigationBar()}
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary" type="submit">click</Button>
        </Col>
      </Row>
    </Container>
  );
}

const navigationBar = () => {
  return (<Navbar bg="dark" expand="sm" variant="dark">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Aun No se</Nav.Link>
        <Nav.Link href="#QuienesSomos">Quienes Somos?</Nav.Link>
        <Nav.Link href="#actividades">Actividades</Nav.Link>
        <Nav.Link href="#lunch">Lunchs</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>);
}
export default Header;// para que este disponible para otros archivos 