//30. Eliminar "Script" de la cadena en la quinta posición
//Escriba un programa JavaScript para comprobar si la cadena "Script" aparece en la quinta posición (índice 4)
//de una cadena dada. Si "Script" aparece en la cadena, 
//devuelva la cadena sin "Script"; de lo contrario, devuelva la cadena original.

function comprobar(string){
    let stringNew= string.substring(0, 4);
    let mitadString= string.substring(4, string.length);

    if( mitadString == "script"){
        return stringNew;
    }else{
        return string;
    }
}
console.log(comprobar("script"));