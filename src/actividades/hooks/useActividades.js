import { useState } from 'react';
import { generarActividadesPorFechaYPorTiempo } from "../../controllers/actividadesController";

//hooks manipulan el estado de un componente
//hooks tambien son el punto de contacto con los servicios externos
//para comunicarse con los web services
const useActividades = ({ fechaDeNacimiento, tiempo }) => {
    const [actividades, setActividades] = useState(null);
    const [mensajesDeError, setMensajesDeError] = useState(null);
    const [isError, setIsError] = useState(false)

    const generarActividades = () => {
        try {
            const actividades = generarActividadesPorFechaYPorTiempo(fechaDeNacimiento, tiempo)
            setActividades(actividades);
        }
        catch (exception) {
            setIsError(true);
            setMensajesDeError(exception.message);
        }
    };

    return {
        actividades,
        generarActividades,
        isError,
        mensajesDeError
    }
}

export default useActividades;