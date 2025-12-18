// 16. Sum Two Integers (Triple if Equal)

// Write a JavaScript program to compute the sum of the two given integers.
// If the two values are the same, then return triple their sum.

function sumar(int1, int2){

    let calcular= (int1+ int2);
    if (int1 === int2){
    let nuevo =(calcular*3);
    return nuevo;
    }else{
        return calcular;
    }
}
console.log(sumar(3,3));