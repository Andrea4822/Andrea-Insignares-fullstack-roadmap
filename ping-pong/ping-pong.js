let playerOne = "Pablo";
let playerTwo = "Juan";
let pointsPlayerOne = 1;
let pointsPlayerTwo = 1;

function turnCalculator(
  playerOne,
  playerTwo,
  pointsPlayerOne,
  pointsPlayerTwo
) {
  if (pointsPlayerOne === 11) {
    console.log("Winner is" + playerOne);
    return;
  } else if (pointsPlayerTwo === 11) {
    console.log("Winner is " + playerTwo);
    return;
  } else {
    let whoTakeOut;
    if ((pointsPlayerOne + pointsPlayerTwo) % 2) {
      whoTakeOut = playerOne;
    } else {
      whoTakeOut = playerTwo;
    }

    console.log("whoTakeOut: " + whoTakeOut);
  }
}

turnCalculator(playerOne, playerTwo, pointsPlayerOne, pointsPlayerTwo);
