/*FÁCIL
En el taller de Papá Noel hay un elfo interno que está aprendiendo a envolver regalos 🎁.
Le han pedido al elfo que envuelva cajas usando solo texto… y lo hacen más o menos correctamente.
Se les dan dos parámetros:

size:el tamaño del regalo cuadrado
symbol:el personaje que usa el elfo para hacer el borde (cuando no lo estropean 😅)
El regalo debe cumplir estos requisitos:

Debe ser un size x sizecuadrado .
El interior siempre está vacío (lleno de espacios), porque el elfo “aún no sabe cómo dibujar el relleno”.
Si size < 2, devuelve una cadena vacía: el elfo lo intentó, pero el regalo se perdió.
El resultado final debe ser una cadena con caracteres de nueva línea \n.
Sí, es un reto fácil… pero no queremos que despidan al becario, ¿verdad?*/

//🧩 Ejemplos

//const g1 = drawGift(4, '*')
//console.log(g1)
/*
 ****
 *  *
 *  *
 ****
 */
/**
 * @param {number} size - The size of the gift
 * @param {string} symbol - The symbol to draw
 * @returns {string} The gift drawn
 */
function drawGift(size, symbol) {
  if ( size <2 ) {
  return ''
}
 let regaloDibujado = "";
 let primeraFila = "";
 for (let i=0; i <size.length; i ++ ) {
    primeraFila.push(sysmbol)
    regaloDibujado.push(primeraFila);
 }
}