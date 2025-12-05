/* Limpiador de Espacios
A veces los usuarios ingresan datos con espacios extra al principio o al final. Crea una función que reciba un string sucio (ej: "  hola mundo  ") y devuelva el string limpio y su nueva longitud.

Ejemplo: limpiar("  test  ") -> "El string limpio es 'test' y mide
4 caracteres"`.

Pista: Investiga el método .trim()*/


function clear(string){
    return string.trim().length;

}

console.log (clear(" The cat is very cute "));

function multiplicar (num){
    let mul = 0;
    for (let i=0; i*3; i ++ ){
        return mul= mul * i *num;
    }

}

console.log(multiplicar(4));





/*function devolver (num){
    let sum=0;
    for (let i =0; i <=num ; i++){
     sum= sum + i ;

    }
    return sum
}

console.log (devolver (10));*/


function devolver (num){
    let sum=0;
    for (let i =0; i <=num ; i++){
     sum= sum + i**2;

    }
    return sum
}

console.log (devolver (8));


function devolver (num, num1){

    if (num % num1===0 ){
        return mul
    }else {
        return false
    }
}

console.log (devolver (13,4));

/* crar una uncion que reciba un array como parametro y si dentro de ese array hay un array va a multiplicar los valores de ese array a otro array

input: [2, 3, [2], 4]
output: [4, 6, 8]

Sebastian Calle Uribe
7:14 PM
input: [[3], 1, 5, 4]
output: [3, 15, 12]
input: [5, 2, 1, 4, 3, [2, 3] 2]

Sebastian Calle Uribe
7:16 PM
output: [30, 12, 6, 24, 18, 12]

input: [1, 2, [2], 5, 6, [2]]
output: [4, 8, 20, 24]

// input: [a,b,[c,d],e]
// output: [(a*c*d), (b*c*d), (e*c*d)]