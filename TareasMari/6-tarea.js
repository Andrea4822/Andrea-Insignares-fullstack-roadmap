/* El Saludo Formal
Crea una función que reciba un nombre (string) y un género (string: "H" para hombre, "M" para mujer).
Si el género es "H", devuelve "Bienvenido, Sr. [Nombre]".
Si el género es "M", devuelve "Bienvenida, Sra.
Nombre]".
Si el género es otro, devuelve "Hola, [Nombre]" */

let gender = "i";

function check(gender) {
  if (gender === "M") {
    let name = "Andrea";
    console.log(name + " welcome, Sra");
  } else if (gender === "H"){
    let name = "Pedro";
    console.log(name + " Welcome, Sr");
  }else{
    let name = "Sofia"
    console.log ("Hello " + name);
  }
}

check(gender);
