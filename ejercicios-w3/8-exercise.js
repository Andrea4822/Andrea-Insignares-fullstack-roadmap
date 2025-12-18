//20. Check if One Integer is Positive and One is Negative
//Write a JavaScript program to check two given integers whether one is positive and another one is negative.  

function check(number1, number2){
    if(number1 <0 && number2 >0 ){
        return `${number1} negativo y ${number2} es positivo`
    }if(number2 <0 && number1 >0){
        return `${number1} positivo y ${number2} es negativo`
    }else{
        return "Ambos son positivos o negativos"
    }
    
}
console.log (check(1,3));