
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
    
    const edad = fechaActual.getFullYear() - fechaDeNacimiento.getFullYear()

    const lunchsParalaEdad = lunchs.lunchs
    .filter(lunch => {
        return lunch.edad.includes(edad)
    })



    let arrayShuffle = function(lunchsParalaEdad){
        let newPos;
        let temp;
        for ( let i= lunchsParalaEdad.length-1; i>0; i--){
        
          newPos= Math.floor(Math.random()*(i+1))
          temp =lunchsParalaEdad[newPos]
          lunchsParalaEdad[newPos]=lunchsParalaEdad[i]
          lunchsParalaEdad[i]=temp
        
          }
          return lunchsParalaEdad

        }
       
        
        return  arrayShuffle(lunchsParalaEdad)
}