function modificarObjeto(gato, nombre, valor){
    return gato[nombre] = valor
}


let gato1 = {
    nombre: "Azul",
    edad: 10
}

console.log(modificarObjeto(gato1, "raza", "siames"));
console.log(gato1)
