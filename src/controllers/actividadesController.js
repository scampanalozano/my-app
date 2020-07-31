//ideal es que esto invoque a un servicio web
import actividades from "../datos/actividades"

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

export const generarActividadesPorFechaYPorTiempo = (fechaDeNacimiento, tiempo) => {
    console.log(fechaDeNacimiento)
    console.log(tiempo)
    const fechaActual = new Date();
    validarFechaNoEnElFuturo(fechaDeNacimiento);
    validarFechaQueNoSeaMenorQueElAnioActual(fechaActual, fechaDeNacimiento);
    //tiempo???
    const edad = fechaActual.getFullYear() - fechaDeNacimiento.getFullYear()
    //activades.edad o las edades a las que aplica la actividad

    const actividadesParalaEdad = actividades.actividades
        .filter(actividad => {
            return actividad.edad.includes(edad)
            && actividad.tiempo <= tiempo
        })
    
        let arrayShuffle = function(actividadesParalaEdad){
        let newPos;
        let temp;
        for ( let i= actividadesParalaEdad.length-1; i>0; i--){
        
          newPos= Math.floor(Math.random()*(i+1))
          temp =actividadesParalaEdad[newPos]
          actividadesParalaEdad[newPos]=actividadesParalaEdad[i]
          actividadesParalaEdad[i]=temp
        
          }
          return actividadesParalaEdad

        }
        let newArray = arrayShuffle(actividadesParalaEdad)
        console.log (newArray)

       // let i= actividadesParalaEdad[i],j,temp
        //while (--i > 0){
          //  j= Math.floor(Math.random()*(i+1));
            //temp = actividadesParalaEdad[j];
            //actividadesParalaEdad[j]=actividadesParalaEdad[i];
            //actividadesParalaEdad[i]=temp
        //}

        console.log(actividadesParalaEdad)



       
     
       


    const asignarActividades = (tiempo) => {
        let cronograma = [];
        let tiempoRestante ;
      
        for (let i = 0; i < actividadesParalaEdad.length; i++) {
            let actividad = actividadesParalaEdad[i]
            console.log(actividadesParalaEdad[i])
            let tiempoDeLaActividad = actividad.tiempo
            if (tiempo - tiempoDeLaActividad >= 0) {
                cronograma.push(actividadesParalaEdad[i])
                tiempoRestante = tiempo - tiempoDeLaActividad
                tiempo= tiempoRestante
                console.log (cronograma)  
            } if (tiempoRestante <= 0) {
                break;
            } 
        }
        return cronograma       
    }
    return asignarActividades (tiempo)
  
}
    