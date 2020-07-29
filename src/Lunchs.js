
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
import TablaDeLunchs from './TablaDeLunchs';
import useLunchs from './useLunchs';
import Alerta from './Alerta'



const Lunchs = () => {
    const [fechaDeNacimiento, setFechaDeNacimiento] = useState(new Date())

    const { lunchs,
        generarLunchs,
        isError,
        mensajesDeError
    } = useLunchs({ fechaDeNacimiento });






    return (
        <Row>
            <Col>
                <Row>
                    <Col>
                        <Alerta show={isError} message={mensajesDeError} />
                    </Col>

                </Row>
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
                        <Button variant="info" className="boton" onClick={generarLunchs}>Generar</Button>{' '}
                    </Col>



                </Row>
                <Row>
                    <Col>
                        <Col>
                            <TablaDeLunchs lunchs={lunchs} />
                        </Col>
                    </Col>
                </Row>



            </Col>
            



        </Row>


    )

}


export default Lunchs;