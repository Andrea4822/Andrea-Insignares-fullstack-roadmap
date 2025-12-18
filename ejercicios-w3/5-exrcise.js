//18. Check if Number or Sum is 50
// Write a JavaScript program to check a pair of numbers and return true 
// if one of the numbers is 50 or if their sum is 50. 

function comprobar(numero1, numero2){
    let calcular= (numero1+numero2);
    if(numero1 === 50 || numero2 === 50 || calcular === 50){
      return true;
    }else{
        return false;
    }
}
console.log(comprobar(20,30));