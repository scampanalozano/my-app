import React from 'react';
import Table from "react-bootstrap/Table";

const TablaDeActividades = ({ actividades }) => {
    const nombreDeLasCabeceras = ["Nombre", "Descripcion","Links","Cancion","Complejidad","Tiempo"]
    const cabeceras = nombreDeLasCabeceras.map(item => <th key={item}>{item}</th>)
    if (actividades) {
        const tablaActividades = actividades.map(actividad =>
            (<tr key = {actividad.nombre}>
                <td>{actividad.nombre}</td>
                <td>{actividad.descripcion}</td>
                <td>{actividad.links}</td>
                <td>{actividad.cancion}</td>
                <td>{actividad.complejidad}</td>
                <td>{actividad.tiempo}</td>
            </tr>)
        );
        return (
            <Table striped bordered hover>
                <thead>
                    <tr key="cabeceras">
                        {cabeceras}
                    </tr>
                </thead>
                <tbody>
                    {tablaActividades}
                </tbody>
            </Table>)
    }
    return (<div />)
}
export default TablaDeActividades; 
