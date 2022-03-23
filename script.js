"use strict";

let number = document.querySelector(".number");
let checkBtn = document.querySelector(".check");
let againBtn = document.querySelector(".again");
let input = document.querySelector(".guess");

let message = document.querySelector(".message");
let score = document.querySelector(".score");
let scoreNumber = 20;
let highscore = document.querySelector(".highscore");
let highscoreNumber = 0;

let secretNumber = Math.floor(Math.random() * 20 + 1);
console.log(secretNumber);

checkBtn.addEventListener("click", function () {
  let inputValue = Number(input.value);
  console.log(inputValue);

  if (!inputValue) {
    message.textContent = "Error...";
  } else if (inputValue === secretNumber) {
    message.textContent = "You win!";
    document.querySelector("body").style.backgroundColor = "green";
    number.textContent = secretNumber;

    if (scoreNumber > highscoreNumber) {
      highscoreNumber = scoreNumber;
      highscore.textContent = highscoreNumber;
    }
  } else if (inputValue !== secretNumber) {
    if (scoreNumber > 1) {
      message.textContent = inputValue > secretNumber ? "Too high" : "Too low";
      scoreNumber--;
      score.textContent = scoreNumber;
    } else {
      message.textContent = "You lost the game";
      score.textContent = 0;
    }
  }
});

//reset
againBtn.addEventListener("click", function () {
  scoreNumber = 20;
  secretNumber = Math.floor(Math.random() * 20 + 1);
  message.textContent = "Start guessing...";
  score.textContent = scoreNumber;
  input.value = "";
  number.textContent = "?";
  document.querySelector("body").style.backgroundColor = "black";
});
