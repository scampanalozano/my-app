
import lunchs from "../datos/lunchs"



const validarFechaNoEnElFuturo = (fecha) => {
    const fechaActual = new Date();
    if (fecha > fechaActual) {
        throw Error("La fecha de nacimiento no puede estar en el futuro");
    }
}

const validarFechaQueNoSeaMenorQueElAnioActual = (fechaActual, fechaDeNacimiento) => {
    const limiteDeEdad = 10;
    if (fechaActual.getFullYear() - fechaDeNacimiento.getFullYear() > limiteDeEdad) {
        throw Error(`No se pueden generar actividades para niños mayores a ${limiteDeEdad}. años`);
    }
}
export const generarLunchsPorFecha = (fechaDeNacimiento) =>{
    const fechaActual = new Date();
    validarFechaNoEnElFuturo(fechaDeNacimiento);
    validarFechaQueNoSeaMenorQueElAnioActual(fechaActual, fechaDeNacimiento);


    return lunchs.lunchs
}