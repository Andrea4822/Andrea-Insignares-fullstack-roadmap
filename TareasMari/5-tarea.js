/*2. Validador de Contraseñas Simple
Crea una función que reciba una contraseña (string) y verifique si es segura basándose solo en su longitud.
Si tiene menos de 5 caracteres, devuelve "Insegura".
Si tiene entre 5 y 8 caracteres, devuelve "Media".
Si tiene más de 8 caracteres, devuelve "Segura".*/

let password = "abc1878a4";
function checkPassword (password){
if (password.length <5){
    console.log ("Insecure");
}else if(password.length >= 5 && password.length <= 8){
    console.log ("Medium");
}else if (password.length >8 ){
    console.log ("Safe");
}else {
    console.log ("invalid");
}
}

checkPassword(password)
