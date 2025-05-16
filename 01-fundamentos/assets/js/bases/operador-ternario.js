

const dia = 1;
const horaActual = 10;


let horaApertura;
let mensaje;

// if ([0,6].includes (dia)){
//     console.log('Fin de semana');
//     horaApertura=9;
// } else{
//     console.log('Día de semana');
//     horaApertura=11;
// }

horaApertura = ([0,6].includes(dia)) ? 9 : 11;


// if (horaActual >= horaApertura){
    // mensaje='Está abierto';
// }else{
    // mensaje=`Está cerrado, hoy abrimos a las ${horaApertura}`;
// }

mensaje = (horaActual>= horaApertura) ? 'Está abierto':`Está cerrado, hoy abrimos a las ${horaApertura}`;

console.log({ horaApertura,mensaje });