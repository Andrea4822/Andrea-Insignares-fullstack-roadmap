// 69. Sum of 3 Elements in Array (Length 3)
// Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.

function sumNumbers(array){
    let sumaTotal=0;
    sumaTotal= array[0]+ array[1]+array[2];
    return sumaTotal;
}

console.log(sumNumbers([1,3,4]));
