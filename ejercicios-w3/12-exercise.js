//24. Add First Character to Front and Back of String
//Write a JavaScript program to create another string from a given
// string with the first character of the given string added to the front and back.

//24. Agregar el primer carácter al principio y al final de una cadena
//Escribir un programa en JavaScript para crear otra cadena a partir de una cadena dada con el primer
// carácter de la cadena dada agregado al principio y al final.

function add(string) {
  let newString = "";
let primerCaracter= string[0];
let ultimoCaracter= string[0];
  newString = primerCaracter + string + ultimoCaracter;
  return newString;
}
console.log(add("Cat"));
