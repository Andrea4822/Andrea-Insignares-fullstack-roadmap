//// 111. Find Unique Number Among Three
// Write a JavaScript program to check a number from three given numbers where 
// two numbers are equal. Find the third one.

function check(number1, number2,number3){
    if (number1 === number2){
        return number3;
    }else if (number1 === number3){
        return number2;
    }else if (number2 === number3){
        return number1;
    }
}
console.log (check (3,4,4));