/*8. Random Integer Guess Game
Write a JavaScript program where the program takes a random
integer between 1 and 10, and the user is then prompted to input a guess number. 
The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".*/

let numberRandom=parseInt(Math.random()*10)+1;
let  numberUser = 3;

if (numberRandom===numberUser) {
    console.log ("Match")
    return
}else{
    console.log ("No match")
}

console.log ("Number random is : " + numberRandom + " Numer user is: " + numberUser)
