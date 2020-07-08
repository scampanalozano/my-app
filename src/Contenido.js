import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Lunchs from './Lunchs'
import Actividades from './Actividades';
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Contenido = () => {

    return (
        <Row>
            <Col>
                <Switch>
                    <Route path="/lunchs">
                        <Lunchs />
                    </Route>
                    <Route path="/actividades">
                        <Actividades />
                    </Route>
                </Switch>
            </Col>
        </Row>);
}

export default Contenido;