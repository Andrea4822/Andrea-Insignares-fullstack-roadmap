// Tipos de funciones

/*

    1. Declarada
    2. Expresada
    3. Flecha
    4. Anónima

    5. IIFE
    6. Asincrona
    7. Generadora

*/

// DECLARADA - SE HOISTEA - SI TIENE CONTEXTO

console.log(suma(10, 20));

function suma(a, b) {
  return a + b;
}

// EXPRESADA - NO SE HOISTEA - ANONIMA - SI TIENE CONTEXTO

// console.log(miFuncion(10, 20));

const miFuncion = function (a, b) {
  return a + b;
};

// ANONIMAS - NO TIENE NOMBRE - SI TIENE CONTEXTO

// CONTEXTO = THIS

// CALLBACK Cuando le pasamos como parametro una función a una función}

// ARROW FUNCTIONS / FLECHA - ANÓNIMAS - NO TIENE CONTEXTO

const miFuncionFlecha = (a, b) => {
  return a + b;
};

// FOR OF
const arrayDeNumeros = [1, 2, 3, 4, 5, 6];

/*
for (let i =0; i <arrayDeNumeros.length;i++){
console.log(arrayDeNumeros[i]);
}
*/

/*
for (let numeros of arrayDeNumeros) {
  console.log(numeros);
}

for (let numeros of arrayDeNumeros){
    if (numeros %2 === 0){
        console.log (numeros)
    }
}
*/

// Callbacks
arrayDeNumeros.forEach((numeros) => {
  console.log(numeros);
});

arrayDeNumeros.forEach(imprimirNumero);

imprimirNumero(arrayDeNumeros[0]);
imprimirNumero(arrayDeNumeros[1]);
imprimirNumero(arrayDeNumeros[2]);
imprimirNumero(arrayDeNumeros[3]);
imprimirNumero(arrayDeNumeros[4]);
imprimirNumero(arrayDeNumeros[5]);

function imprimirNumero(x) {
  console.log(x);
}

const string = "Hola Mundo";

for (const letra of string) {
  if (letra === "o") {
    continue;
  }
  console.log(letra);
}

console.log("H")
console.log("o")
console.log("l")
console.log("a")
console.log(" ")
console.log("M")