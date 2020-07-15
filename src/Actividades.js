import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Actividades = () => {
    const [fechaDeNacimiento, setFechaDeNacimiento] = useState()
    const tiempo = "";
    //const actividad = { nombre, descripcion, tiempo };



    const onClick = (e) => {
        console.log("asdasdasd")
    }

    return (
        <Row>
            <Col>
              
                    <Row> <Col>Seleccione la fecha de nacimiento y el tiempo....</Col></Row>
                    <Row>
                        <Col>
                            Fecha de Nacimiento:
                    </Col>
                        <Col>
                            Componente de fecha
                            
                        </Col>
                        <Col>
                            Tiempo:
                    </Col>
                        <Col>
                            Componente
                    </Col>
                    </Row>
                    <Row>
                        {/* <Col><Button type="submit" onclick={onclick} /></Col> */}
                    </Row>
                    <Row>
                        <Col>Nombre de la actividad</Col>
                        <Col></Col>
                    </Row>


              
            </Col>
        </Row>
    )


}

export default Actividades;