/*
25. Check if Number is Multiple of 3 or 7
Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7
*/
const number = 6;
function checkNumber(number) {
  if (number % 3 === 0) {
    console.log("this number is multiple of three:  " + number);
  } else if (number % 7 === 0) {
    console.log("this number is multiple of seven : " + number);
  } else {
    console.log("not is multiple");
  }
}

checkNumber(number);
