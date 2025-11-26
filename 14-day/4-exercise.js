/**
 * Write a JavaScript program to remove a character at the specified
 * position in a given string and return the modified string.  
 */

let cadenaDada="Hola";
let indiceEliminado= 0;

function cadenaModificada(cadenaDada, indiceEliminado){
    
  let antesModificar = cadenaDada.slice(0, indiceEliminado)
let indiceModificado= cadenaDada.slice(indiceEliminado + 1)
let cadenaModificada = antesModificar + indiceModificado
    return cadenaModificada
}
console.log(cadenaModificada(cadenaDada,indiceEliminado))