import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Actividades.css'
import oso from './oso.gif';
import Image from 'react-bootstrap/Image'
import Button from "react-bootstrap/Button"




const Actividades = () => {
    const [fechaDeNacimiento, setFechaDeNacimiento] = useState("")
    const [tiempo, setTiempo] = useState("")


    const onClick = (e) => {
        console.log("asdasdasd")
    }

    return (
        <Row>
            <Col>
                <Form>
                    <Row> <Col className="titulo">Seleccione la fecha de nacimiento y el tiempo:</Col></Row>
                    <Row>

                        <Col lg="2" md="1" />
                        <Col lg="8" md="10" >
                            <Row>
                                <Col lg="2" md="2" className='fecha'>
                                    Fecha de Nacimiento:
                                </Col>
                                <Col lg="4" md="4">
                                    <DatePicker />
                                </Col>
                                <Col lg="2" md="2" className='tiempo'>
                                    Tiempo:
                                </Col>
                                <Col lg="4" md="4">
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Control as="select">
                                            <option>Seleccionar</option>
                                            <option>15 minutos</option>
                                            <option>30 minutos</option>
                                            <option>1 hora</option>
                                            <option>2 horas</option>
                                            <option>3 horas</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>

                            </Row>
                        </Col>
                        <Col lg="2" md="1" />
                    </Row>

                </Form>
                <Row>
                    <Col>
                        <Image className="oso"
                            src={oso}
                            fluid
                        /></Col>
                </Row>

                <Row>
                <Button variant="info" className="boton">Info</Button>{' '}
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