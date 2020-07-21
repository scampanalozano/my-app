import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./QuienesSomos.css"
import Image from "react-bootstrap/Image";
import oso3 from "./oso3.gif";

const QuienesSomos =()=>{
     return (
     <Row className="vision">
        <Col className= "vision p" >
        Somos una empresa que busca ayudar a madres que tiene hijos pequeños cuyo problema es no saber como entretener y alimentar nutritivamente 
        a sus hijos el Funny Moms, es un sitio web, 
       que permite obtener un cronograma de actividades 
    divertidas y educativas además de un menú de luchs nutritivos.
        
        </Col>

        <Row>

        <Col>
        <Image className="oso"
                            src={oso3}
                            fluid
    />
        </Col>
    </Row>

    </Row>

    
);

}

export default QuienesSomos;