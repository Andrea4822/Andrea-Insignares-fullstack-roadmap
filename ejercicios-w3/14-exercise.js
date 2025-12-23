//26. Agregar los últimos 3 caracteres al principio y al final de la cadena
//Escriba un programa JavaScript para crear una cadena a partir de una cadena dada. 
//Esto se logra tomando los últimos 3 caracteres y agregándolos al principio y al final.
 //La cadena debe tener una longitud de 3 caracteres o más.

 function agregar (string){
    let cadena="";
    
    let cadenaPrincipio= string[string.length -1];
    let cadenaFinal= string[string.length -1];
    cadena = cadenaPrincipio + string + cadenaFinal;
    return cadena;
 }
 console.log(agregar("Cat"));