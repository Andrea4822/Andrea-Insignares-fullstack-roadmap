/* 4. Calculate Area of Triangle (Sides: 5, 6, 7)

Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  */

//Fórmula de Herón
//A = √[4a²b² - (a² + b² - c²)²]/4 */

function calcular(){
   const a = 5;
   const b = 6;
   const c = 7;
   let multiplicacionUno= a*a;
   let multiplicacionDos=b*b;
   let multiplicacionTres=c*c;
   let resultMultiplicacion= 4*multiplicacionUno*multiplicacionDos;
   let primeraParte= multiplicacionUno+multiplicacionDos-multiplicacionTres;
   let segundaParte= primeraParte*primeraParte;
   let terceraParte=resultMultiplicacion-segundaParte;
   let cuartaParte= Math.sqrt(terceraParte);
   let result= cuartaParte/4;
   return result;
}

console.log(calcular());

