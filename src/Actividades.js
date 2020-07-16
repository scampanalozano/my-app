import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


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
                    <Row> <Col>Seleccione la fecha de nacimiento y el tiempo....</Col></Row>
                    <Row>
                        <Col lg="2" md="1" />
                        <Col lg="8"  md="10" >
                            <Row>
                                <Col lg="2" md="2">
                                    Fecha de Nacimiento:
                                </Col>
                                <Col lg="4"  md="4">
                                    <DatePicker />
                                </Col>
                                <Col lg="2" md="2">
                                    Tiempo:
                                </Col>
                                <Col lg="4" md="4">
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Control as="select">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>

                            </Row>
                        </Col>
                        <Col lg="2" md="1"  />
                    </Row>

                </Form>

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