/* Iniciales de Nombre
Crea una función que reciba un nombre completo (nombre y apellido) y devuelva solo las iniciales en mayúsculas separadas por un punto.

Ejemplo: iniciales("juan perez") -> "J.P"
Pista: Puedes acceder al primer carácter de un string como si fuera un arreglo (índice 0) o usar .charAt(0)*/


/*let name = "andrea insignares";
let word = name.split(" ");
let extraerUno = word[0].toString().slice(0,1).toUpperCase()
let extraerDos = word[1].toString().slice(0,1).toUpperCase()



console.log(word)
console.log(extraerUno)
console.log(extraerDos)
console.log(extraerUno + "." + extraerDos) */



function nombreFuncion(nombre){
    let arreglo = nombre.split(" ");
    let nuevoString= [];
    for (let i =0; i < arreglo.length -1; i++){
        const primeraLetra = arreglo[i];
        const primeraLetraMayuscula = primeraLetra[0];
        nuevoString.push(primeraLetraMayuscula.toUpperCase());
            
    }
    console.log(nuevoString.join("."));
}

nombreFuncion("andrea insignares ")

    



