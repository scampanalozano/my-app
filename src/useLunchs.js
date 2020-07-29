import { useState } from 'react';
import { generarLunchsPorFecha } from "./controllers/lunchsControllers";


const useLunchs = ({ fechaDeNacimiento }) => {
    const [lunchs, setLunchs] = useState(null);
    const [mensajesDeError, setMensajesDeError] = useState(null);
    const [isError, setIsError] = useState(false)

    const generarLunchs = () => {
        try {

            const lunchs = generarLunchsPorFecha(fechaDeNacimiento)
            setLunchs(lunchs);

        } catch (exception) {
            setIsError(true);
            setMensajesDeError(exception.message);

        }

    };

    return {
        lunchs,
        generarLunchs,
        isError,
        mensajesDeError
    }


}

export default useLunchs; 