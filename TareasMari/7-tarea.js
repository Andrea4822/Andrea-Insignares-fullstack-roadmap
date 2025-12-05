/*4. El Eco
Crea una función que reciba una palabra y un número n. La función debe devolver la palabra repetida n veces, separada por espacios.
Ejemplo: eco("Hola", 3) -> "Hola Hola Hola"*/


function returnWord(word , number){
    return word.repeat(number)
}
console.log (returnWord ("nombre ", 3));
