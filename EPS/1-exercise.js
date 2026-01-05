/*function check(string){
    let stringReves="";
    for(let i = string.length -1; i >=0; i --){
        stringReves+= string[i];
    }
    return stringReves;
}
console.log(check("Hola Mundo"));*/

/*function check(string){
    let contadorEspacios=0;
    for(let i =0; i <string.length;i++){
        if(string[i] === " "){
            contadorEspacios++
        }
    }
    return contadorEspacios;
}
console.log(check("Hola Mundo hola Mundo"));*/

/*function imprimir(num){
    let numeroNuevo="";
    for (let i =0; i <num; i ++){
        numeroNuevo+="*"
    }
    return numeroNuevo
}
console.log(imprimir(3));*/

/*function imprimir(num){
    let simbolo="*"
    for(let i =0; i <num;i++){
        simbolo.repeat(num[i]);
    }
}
console.log(imprimir(5));*/

function imprimir (palabra){
    let palabraSeparada=palabra.split(" ")

    for(let i =0; i <palabra.length;i++){
        if(palabraSeparada[0]> palabraSeparada[1]){
            return palabraSeparada 
        }
        

        }
         return palabraSeparada
    }

console.log(imprimir("Hola Mundo"));





