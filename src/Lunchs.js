
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "react-bootstrap/Image"
import osolunch from './osolunch.gif';
import Button from "react-bootstrap/Button"
import "./Lunchs.css";






const Lunchs = () => {
    const [fechaDeNacimiento, setFechaDeNacimiento] = useState(new Date())
    const [lunch, setLunch] = useState({});



    const generarLunch = (e) => {
        console.log(`${fechaDeNacimiento}`);
        const lunch = generarLunch(fechaDeNacimiento)
        setLunch(lunch);
    };




    return (
        <Row>
            <Col>
                <Form>
                    <Row><Col className="titulo">Seleccione la fecha de nacimiento</Col>
                    </Row>
                    <Row>
                        <Col lg="1" md="1" />
                        <Col lg="3" md="10" />
                        <Row>
                            <Col lg="4" md="4" className="fecha">Fecha de nacimiento</Col>
                            <Col>
                                <DatePicker selected={fechaDeNacimiento}
                                    onChange={setFechaDeNacimiento}

                                />

                            </Col>

                        </Row>

                    </Row>
                </Form>

                <Row>
                    <Col>
                        <Image className="oso"
                            src={osolunch}
                            fluid
                        />

                    </Col>
                </Row>

                <Row>

                    <Col>
                        <Button variant="info" className="boton" onClick={generarLunch}>Generar</Button>{' '}
                    </Col>
                </Row>


            </Col>



        </Row>


    )

}


export default Lunchs;