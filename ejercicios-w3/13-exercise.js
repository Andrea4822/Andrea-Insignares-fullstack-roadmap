//25. Check if Number is Multiple of 3 or 7
//Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.  

function check(number){
    if(number %3 === 0 || number %7 === 0){
        return "Es multiplo de tres o siete"
    }else{
        return "No es multiplo de estos numeros"
    }
}

console.log(check(6));