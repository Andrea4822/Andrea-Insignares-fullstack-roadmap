//five: Tabla de multiplicar
//Muestra la tabla de multiplicar de un número del 1 al 10.
function check( number){
    for (let i= 1; i  <=10; i ++){
        console.log(`${number} x ${[i]} = ${(number) * [i]}`);
    }
}
check(2);

//:three: Mayor de tres números
//Recibe tres números y devuelve el mayor.

function check(num1, num2,num3){
    if( num1 > num2 && num1 > num3){
        return num1
    }if ( num2 > num1 && num2 > num3){
        return num2
    }if(num3 > num1 && num3 > num2){
        return num3
    }
}
console.log (check(80,50,40));

//six: Sumar números de un arreglo
//Suma todos los valores de un arreglo de números.

let array1 = [1,2,3,4,5,6];
function sumar(array){
    let resultado= 0;
    for (let i = 0 ; i <array.length; i ++){
        resultado += array [i];
    }
return resultado;

}
console.log(sumar(array));


//seven: Contar pares
//Cuenta cuántos números pares hay en un arreglo.

let array= [2,4];
function sumar (array){
    let resultado =0;
    for( let i = 0; i < array.length; i ++){
 if ( array[i] %2 === 0 ){
 resultado ++
 }
    }
    return resultado;
   
}
console.log (sumar(array));

//eight: Invertir una cadena
//Invierte un texto recibido como parámetro.

function invertir(string){
    let result = "";
    for ( let i = string.length - 1 ; i >=0; i --){
        result += string[i] ;
    }
    return result;
}
console.log(invertir("Hola"));

function buscar( array, number){
    let estado = true ;
    for(let i =0; i < array.length; i ++){
 if ( array[i] === number){
    estado= "true"
    }else{
    estado= "falso"
    }
}
return estado;
}
console.log (buscar([1,2,3,4,5], 3));

