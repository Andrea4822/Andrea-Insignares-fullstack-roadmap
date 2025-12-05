/*6. La Palabra Más Larga
Dadas dos palabras (strings), escribe una función que devuelva la palabra que tiene más caracteres.
Si tienen la misma longitud, devuelve "Tienen el mismo largo".
Ejemplo: comparar("Sol", "Luna") -> "Luna"*/



function returnWord(string1, string2){
    if ( string1.length > string2.length ){
        return string1;
    }else if (string2.length > string1.length){
        return string2;
    }else{
        return "The two string are equals"
    }
}
console.log (returnWord("Andrea", "insignares"));

