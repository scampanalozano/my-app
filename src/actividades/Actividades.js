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
import TablaDeActividades from './TablaDeActividades';
import useActividades from './hooks/useActividades';
import Alerta from '../Alerta'

//Hooks
const Actividades = () => { //Function Component
    const [fechaDeNacimiento, setFechaDeNacimiento] = useState(new Date())
    const [tiempo, setTiempo] = useState("15")

    const { actividades,
            generarActividades,
            isError,
            mensajesDeError
        } = useActividades({fechaDeNacimiento, tiempo});


    const onTiempoSelect = (event) => {
        setTiempo(event.target.value);
    };
    //horas 
    //minutos
    // const opciones = [{ descripcion: "15 minutos", tiempoEfectivo: 1 / 15 }, { descripcion: "1 hora", tiemporEfectivo: 1 }]
    return (
        <Row>
            <Col>
                <Row>
                    <Col>
                        <Alerta show = {isError} message={mensajesDeError} />
                    </Col>
                </Row>
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
                                    <DatePicker selected={fechaDeNacimiento}
                                        onChange={setFechaDeNacimiento}
                                    />
                                </Col>
                                <Col lg="2" md="2" className='tiempo'>
                                    Tiempo:
                                </Col>
                                <Col lg="4" md="4">
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Control as="select" defaultValue={tiempo} onChange={onTiempoSelect}>
                                            <option>Seleccionar tiempo en minutos</option>
                                            <option>15</option>
                                            <option>30</option>
                                            <option>60</option>
                                            <option>120</option>
                                            <option>180</option>
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
                    <Button variant="info" className="boton" onClick={generarActividades}>Generar</Button>{' '}
                </Row>
                <Row>
                    <TablaDeActividades actividades={actividades} />
                </Row>
            </Col>
        </Row>
    )


}
export default Actividades;