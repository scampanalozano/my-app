import React from 'react';
import Alert from 'react-bootstrap/Alert'

const Alerta = ({ show, message }) => { // Function Component
    if (show) {
        return (
            <Alert variant="danger" dismissible>
                {/* <Alert.Heading>Oh snap! You got an error!</Alert.Heading> */}
                <p>
                    {message}
                </p>
            </Alert>
        );
    } return (<div/>)
}



export default Alerta;