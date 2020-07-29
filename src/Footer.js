import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'

const Footer = () => {
    return (
        <Row className = "footer">
            <Col>
                <li  className="informacion">CONTACTANOS</li>
                <Col className= "ciudad">Quito-Ecuador</Col>
                <Col className= "telefono">0987752150</Col>
                <Col className= "email">antonellacampana6@gmail.com</Col>

                <Col className= "texto">
                
                &copy;{new Date().getFullYear()} SOCIEDAD ANONIMA | Todos los derechos reservados | Privacy

            </Col>
           
            </Col>
            
               
                
            
            


        </Row>);

}

export default Footer;