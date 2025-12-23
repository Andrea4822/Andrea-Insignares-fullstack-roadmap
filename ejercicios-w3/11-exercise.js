//23. Intercambiar el primer y el último carácter de una cadena
//Escriba un programa en JavaScript para crear una nueva cadena a partir de una cadena dada,
// cambiando la posición del primer y el último carácter. La longitud de la cadena debe ser mayor o igual a 1.

function cambiar(string) {
  let primerCaracter = "";
  let ultimoCaracter = "";
  let mitad = "";
  let nuevaCadena = "";

  ultimoCaracter = string[string.length - 1];
  primerCaracter = string[0];
  mitad = string.substring(1, string.length - 1);

  nuevaCadena = ultimoCaracter + mitad + primerCaracter;

  return nuevaCadena;
}

console.log(cambiar("Hola"));

/*
let string = "Hola Hola Mundo Tin Tan Tun";
console.log(string.length);
console.log(string[string.length - 1]); */
