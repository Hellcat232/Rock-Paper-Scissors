const choicesEl = document.querySelectorAll(".emoji-div");
const resultMessageEl = document.querySelector("#result");
const userEmojiEl = document.querySelector("#user-score-emoji");
const compEmojiEl = document.querySelector("#comp-score-emoji");
const userEmojiNameEl = document.querySelector("#user-emoji-name");
const compEmojiNameEl = document.querySelector("#comp-emoji-name");
const userScoreEl = document.querySelector("#user-score-number");
const compScoreEl = document.querySelector("#comp-score-number");

let userScore = 0;
let compScore = 0;

choicesEl.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

function playGame(userChoice) {
  const compChoice = genCompChoice();

  changeEmoji(userChoice, compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin);
  }
}

function genCompChoice() {
  const options = ["rock", "paper", "scissors"];
  const randIndex = Math.floor(Math.random() * 3);

  return options[randIndex];
}

function changeEmoji(userChoice, compChoice) {
  switch (userChoice) {
    case "rock":
      userEmojiEl.innerHTML = "✊";
      userEmojiNameEl.innerHTML = "Камень";
      break;
    case "paper":
      userEmojiEl.innerHTML = "✋";
      userEmojiNameEl.innerHTML = "Бумага";
      break;
    case "scissors":
      userEmojiEl.innerHTML = "✌";
      userEmojiNameEl.innerHTML = "Ножницы";
      break;
  }

  switch (compChoice) {
    case "rock":
      compEmojiEl.innerHTML = "✊";
      compEmojiNameEl.innerHTML = "Камень";
      break;
    case "paper":
      compEmojiEl.innerHTML = "✋";
      compEmojiNameEl.innerHTML = "Бумага";
      break;
    case "scissors":
      compEmojiEl.innerHTML = "✌";
      compEmojiNameEl.innerHTML = "Ножницы";
      break;
  }
}

function drawGame() {
  resultMessageEl.innerHTML = "Ничья";
}

function showWinner(userWin) {
  if (userWin) {
    userScore++;
    userScoreEl.innerHTML = userScore;
    resultMessageEl.innerHTML = "Ты выиграл!";
  } else {
    compScore++;
    compScoreEl.innerHTML = compScore;
    resultMessageEl.innerHTML = "Ты проиграл!";
  }
}
