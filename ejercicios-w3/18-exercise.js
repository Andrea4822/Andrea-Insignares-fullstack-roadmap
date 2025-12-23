//Par o impar
//Crea una función que reciba un número y determine si es par o impar.

function check(number){
    if (number %2 === 0){
        return "Es par"
    } else{
        return "Es impar"
    }
}
console.log (check(2));