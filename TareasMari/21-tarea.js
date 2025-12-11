// 75. Crear un array con los elementos centrales de dos arrays
// Escribe un programa en JavaScript para crear un array
// tomando los elementos centrales de los dos arrays
// de un entero y cada uno de longitud 3.


function crear(array1, array2){
    array3=[]
    array3.push(array1[1]);
    array3.push(array2[1]);
    return array3;
}

console.log (crear([1,2,3],[4,5,6]));