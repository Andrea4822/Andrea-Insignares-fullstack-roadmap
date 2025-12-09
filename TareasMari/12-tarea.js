// Objetivo: Crear una función que reciba un arreglo de números y devuelva 
// cuántos de esos números son pares.


function returnNumbers(array){
    let count = 0;

    for (let i= 0; i <array.length;i++){
        if (array[i] % 2 === 0){
            count++;
            
        }
    }

    return count;
}
console.log (returnNumbers([1,2,3,4]));