import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

function Header() {
  return (
    <Container>
      <Row className="Header-banner">
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary" type="submit">click</Button>
        </Col>
      </Row>
    </Container>
  );
}
export default Header;// para que este disponible para otros archivos 