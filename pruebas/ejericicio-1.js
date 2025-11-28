let nombre;
let edad;

nombre="Andrea";
edad=14;

console.log(" Hola me llamo " + nombre + " y tengo " + edad);

let a= 5;
let b= 0;
console.log (a + b);
console.log ( a - b );
console.log (a * b);
console.log (a / b );

const primerNombre= "Andrea";
const apellidoUsuario="Insignares";
const edadUsuario=14;

console.log ( primerNombre , apellidoUsuario , edadUsuario );


const x= 10;
const y = 5;
const calcular =((x + y) *2);
console.log( "El resultado es " + calcular);

const edad1= 20;
if (edad1 >=18){
    console.log ("Eres mayor de edad")
}else{
    console.log("Eres menor de edad")
}
// escriba una funcion de java script para mirar si dos numeros estan en el rango de 40 a 60

const numero3 = 46;
const numero4 = 57;

function verificarNumero (numero3, numero4){
  if ((numero3 <40 || numero3 > 60) && (numero4 <40 || numero4 >60 )){
    console.log ("Ningun numero esta en el rango")
  }
  if ((numero3 >= 40 && numero3 <=60) && (numero4 >=40 && numero4 <= 60)){
    if (numero3 > numero4) {
        console.log(numero3);
    } else {
        console.log(numero4);
    }
  } else if (numero3 >= 40 && numero3 <= 60) {
    console.log(numero3);
  } else if (numero4 >= 40 && numero4 <= 60) {
    console.log(numero4);
  } else {
    console.log("no esta en el rango");
  }

}
console.log (verificarNumero (numero3, numero4));

//funcion que imprima de 0 hasta el numero que le pase y si el numero que vamos a imprimir esta entre 4 y 10 en vez de imprimir el numero me imprima andrea 

const numeroOne=10;
function imprimirNumeros(numeroOne){
for (let i = 1; i <numeroOne; i++)
     console.log(i);
}
console.log (imprimirNumeros(numeroOne))


