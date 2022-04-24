"use strict";
let randomNumber = Math.trunc(Math.random() * 25) + 1;

// below line will have to be deleted at the end, as at the moment, the random number is displayed in the box
// document.querySelector(".secret_number").textContent = randomNumber;

let currentScore = 25;
let highestScore = 0;

const changeMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // if no number was entered
  if (!guess) {
    changeMessage("⛔ A number must be entered");
    document.querySelector(".message").style.color = "red";

    // if the number wasn't between 1 and 25 as instructed
  } else if (guess < 1 || guess > 25) {
    changeMessage("⛔ Your number must be between 1 and 25");
    document.querySelector(".message").style.color = "red";
    document.querySelector(".guess").value = "";

    // if the number is correct
  } else if (guess === randomNumber) {
    changeMessage(
      `🥳 You won, ${
        document.querySelector(".guess").value
      } is the right answer!`
    );
    document.querySelector(".secret_number").textContent = randomNumber;
    document.querySelector(".message").style.color = "green";
    document.querySelector(".guess").value = "";
    document.querySelector(".secret_number").style.backgroundColor =
      "hsl(80, 61%, 50%";
    if (currentScore > highestScore) {
      highestScore = currentScore;
      document.querySelector(".highest_score").textContent = highestScore;
    }

    // if number is not correct
  } else if (guess !== randomNumber) {
    guess < randomNumber
      ? changeMessage("⛔ Ups, that's too low")
      : changeMessage("⛔Ups, that's too high");
    document.querySelector(".message").style.color = "red";
    document.querySelector(".guess").value = "";
    currentScore--;
    document.querySelector(".current_score").textContent = currentScore;
  }
});

// starting a new game
document.querySelector(".new_game_btn").addEventListener("click", function () {
  currentScore = 25;
  randomNumber = Math.trunc(Math.random() * 25) + 1;
  changeMessage("Let's start the game");
  document.querySelector(".secret_number").textContent = "?";
  document.querySelector(".secret_number").style.backgroundColor =
    "rgb(233, 233, 115)";
  document.querySelector(".message").style.color = "rgb(163, 126, 31)";
  document.querySelector(".current_score").textContent = currentScore;
  document.querySelector(".highest_score").textContent = highestScore;
  document.querySelector(".guess").value = "";
});
