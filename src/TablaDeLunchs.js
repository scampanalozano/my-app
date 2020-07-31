import React from 'react';
import Table from "react-bootstrap/Table";


const TablaDeLunchs = ({lunchs})=>{

    const nombreDeLasCabeceras = ["Nombre", "Ingredientes","Preparacion","Duracion"]
    const cabeceras = nombreDeLasCabeceras.map(item => <th key={item}>{item}</th>)
     if (lunchs ){
         const tablaDeLunchs = lunchs.map (lunch=>
         (<tr key = {lunch.nombre}>
            <td>{lunch.nombre}</td>
            <td>{lunch.ingredientes}</td>
             <td>{lunch.preparacion}</td>
             <td>{lunch.duracion}</td>
            
            
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
                    {tablaDeLunchs}
                </tbody>
            </Table>)
    
    }
    return (<div />)

}

export default TablaDeLunchs;








