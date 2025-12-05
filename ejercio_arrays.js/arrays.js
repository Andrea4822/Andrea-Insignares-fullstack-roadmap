function returnArray(array) {
  let indexArray;

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      indexArray = i;
    }
  }
  let subarray = array[indexArray];

  let multiplicacion = 1;

  for (let i = 0; i < subarray.length; i++) {
    multiplicacion = multiplicacion * subarray[i];
  }

  const arrayDeMultiplicaciones = [];

  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
        arrayDeMultiplicaciones.push(array[i]*multiplicacion)
    }
  }

  return arrayDeMultiplicaciones;
}

console.log(returnArray([1, 2, 3, [4, 5], 6, 7]));
