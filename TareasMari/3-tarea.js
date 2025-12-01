/*
Check if One Integer is Positive and One is Negative
Write a JavaScript program to check two given integers whether one is positive and another one is negative.
*/
let numberOne= -3
let numberTwo=1

function  displayNumbers(numberOne,numberTwo){
if (numberOne > 0 && numberTwo <0){
    console.log ("One number is positive and the other is negative");
    return
}else if (numberTwo >0 && numberOne <0){
    console.log ("One number is positive and the other is negative");
    return
}else{
console.log ("Both numbers are either positive or negative");
}

}
displayNumbers(numberOne,numberTwo);