/* (30 puntos)
 * Crea un programa que invierta el orden de una cadena de texto 
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

function invertir(string){
    let resultado= "";
    for (let i= string.length -1; i >=0;i--){
       resultado+= string[i];
    }
 return resultado;
}
console.log (invertir("hola"));