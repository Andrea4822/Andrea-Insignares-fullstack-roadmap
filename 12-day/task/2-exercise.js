function eliminayDevuelve (perrito, nombre){
delete perrito[nombre]
return perrito;
}

let perrito1 = {
    nombre: "coquito",
    edad: 10
}

console.log(eliminayDevuelve(perrito1, "nombre"));

console.log(perrito1)
