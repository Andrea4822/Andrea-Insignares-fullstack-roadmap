/**
 * Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters.
 * The string length must be broader than or equal to 1. 
 */

let cadenaDada = "pepe";

function intercambiarExtremos(cadenaDada) {
    if (cadenaDada.length <= 1) {
        return cadenaDada;
    }

    let primerCaracter = cadenaDada[0];
    let ultimoCaracter = cadenaDada[cadenaDada.length - 1];
    let parteMedioCadena = cadenaDada.slice(1, cadenaDada.length - 1);

    let cadenaModificada = ultimoCaracter + parteMedioCadena + primerCaracter;

    return cadenaModificada;
}

console.log(intercambiarExtremos(cadenaDada)); 


