import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Lunchs from './Lunchs'
import Actividades from './actividades/Actividades';
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
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/QuienesSomos" component= { QuienesSomos }/>
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