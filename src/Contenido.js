import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Lunchs from './Lunchs'
import Actividades from './Actividades';
import Home from './Home';

import {
    Switch,
    Route,
} from "react-router-dom";
import QuienesSomos from './QuienesSomos';


const Contenido = () => {

    return (
        <Row>
            <Col>
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/QuienesSomos">
                        <QuienesSomos/>
                    </Route>
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