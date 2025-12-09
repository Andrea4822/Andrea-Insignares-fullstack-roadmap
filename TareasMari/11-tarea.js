// Objetivo: Escribir una función que tome un arreglo de números como entrada y retorne el valor
//  del número más grande que se encuentra en él.

function take(array) {
  let bigger = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > bigger) {
      bigger = array[i];
    }
  }

  return bigger;
}

console.log(take([1, 2, 3]));
