/*15. Diferencia entre un número y 13
Escribe un programa en JavaScript para obtener la diferencia entre un número dado y 13. Si el número es mayor que 13, devuelve el doble de la diferencia absoluta.
Haz clic aquí para ver la solución*/
function  calcular(numero){
    let resta= (numero-13);
    if(numero <13){
        return resta;
    }else{
        return (resta *2);
    }

}
console.log(calcular(20));