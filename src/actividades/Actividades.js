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
import Table from "react-bootstrap/Table"
import { generarActividadesPorFechaYPorTiempo } from "../controllers/actividadesController";

//Hooks
const Actividades = () => {
    const [fechaDeNacimiento, setFechaDeNacimiento] = useState(new Date())
    const [tiempo, setTiempo] = useState("15")
    const [actividades, setActividades] = useState(
        <tr>
            <td>No hay datos</td>
        </tr>
    );
    //porque se daña , por qué es necesario hacer lo de aca arriba
    //const [actividades, setActividades] = useState({});

    const nombreDeLasCabeceras = ["Nombre", "Descripcion"]

    //mapear el arreglo de cabeceras y voy a retornar un arreglo de table headers
    //<th>texto de la cabecera</th>
    //cabeceras = []
    //for(let i = 0; i< cabeceras.length, i++){
    // let item = cabeceras[i];
    // let transformado  = <th>{item}</th>
    //cabeceras.push(transformado)
    //}

    const cabeceras = nombreDeLasCabeceras.map(item => <th>{item}</th>)

    // this.state = {
    //     fechaDeNacimiento:"",
    //     tiempo:0,
    //     actividad : {}
    // }

    // this.state = setState({fechaDEnacimeinto: "21/01/1980"})
    //useEffect

    const generarActividad = (e) => {

        // funcion que va a a consultar las actividades de acuerdo al tiempo
        const actividades = generarActividadesPorFechaYPorTiempo(fechaDeNacimiento, tiempo)
        //map actividades en table row
        //<tr>
        //   <td>nombre</td>
        //   <td>descripcion</td>
        // </tr>

        const tablaActividades = actividades.map(actividad =>
            (<tr>
                <td>{actividad.nombre}</td>
                <td>{actividad.descripcion}</td>
            </tr>)
        );

        setActividades(tablaActividades);
    };

    const onTiempoSelect = (event) => {
        setTiempo(event.target.value);
    };

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
                    <Button variant="info" className="boton" onClick={generarActividad}>Generar</Button>{' '}
                </Row>
                <Row><Col></Col></Row>
                <Row>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                {cabeceras}
                            </tr>
                        </thead>
                        <tbody>
                            {actividades}
                        </tbody>
                    </Table>
                </Row>
            </Col>
        </Row>
    )


}

export default Actividades;