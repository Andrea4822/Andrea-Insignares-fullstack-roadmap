//28. Comprobar si dos enteros están en el rango 50-99
//Escriba un programa JavaScript para comprobar si dos valores enteros dados están en el rango 50-99 (inclusive). 
//Devuelve "true" si alguno de ellos está dentro del rango.

function comprobar(num1, num2){
    if (num1 >50 && num1<99|| num2 >50 && num2 <99){
        return true
    }else{
        return false;
    }
}
console.log(comprobar(3,7));