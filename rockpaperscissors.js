function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3); // random 0, 1, 2
  if (choice === 0) return "rock";
  if (choice === 1) return "paper";
  if (choice === 2) return "scissors";
}

/*
function getHumanChoice() {
  while (true) {
    let input = prompt("Rock, Paper, or Scissors? (Type here): ");

    input = input.trim().toLowerCase();
    if (input === "rock" || input === "paper" || input === "scissors")
      return input;

    alert("Input is not valid.");
  }
}
*/
let humanScore = 0;
let computerScore = 0;
let maxPoints = 5;

function updateScoreBoard() {
  document.querySelector("#human-score").textContent = humanScore;
  document.querySelector("#computer-score").textContent = computerScore;
}

function playRound(compChoice, humanChoice) {
  let displayResult = document.querySelector(".round-result");

  if (compChoice === humanChoice) {
    displayResult.textContent = "Draw!";
    return;
  }

  const winningRules = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (winningRules[humanChoice] === compChoice) {
    displayResult.textContent = `You win! ${humanChoice.toUpperCase()} beats ${compChoice.toUpperCase()}.`;
    humanScore++;
    updateScoreBoard();
    return;
  } else {
    displayResult.textContent = `Computer wins! ${compChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}.`;
    computerScore++;
    updateScoreBoard();
    return;
  }
}

function declareWinner() {
  const matchResult = document.querySelector(".match-result");
  const roundResult = document.querySelector(".round-result");
  roundResult.textContent = "";

  if (humanScore > computerScore) {
    matchResult.textContent = `Game Over! You won the match! (${humanScore}-${computerScore})`;
  } else if (humanScore < computerScore) {
    matchResult.textContent = `Game Over! Computer won the match! (${humanScore}-${computerScore})`;
  } else {
    matchResult.textContent = `Game Over! It's a tie! (${humanScore}-${computerScore})`;
  }
}

const roundAdjust = document.querySelector(".round-adjust input");
const playButton = document.querySelector(".round-adjust button");

playButton.addEventListener("click", () => {
  maxPoints = parseInt(roundAdjust.value);
  humanScore = 0;
  computerScore = 0;
  updateScoreBoard();

  document.querySelector(".round-result").textContent = "";
  document.querySelector(".match-result").textContent = "";
});

const container = document.querySelector(".rps-box");

container.addEventListener("click", (e) => {
  const target = e.target; // prevent clicking div returns undefined

  if (humanScore >= maxPoints || computerScore >= maxPoints) {
    return;
  }

  if (target.tagName === "BUTTON") {
    const humanSelection = target.value;
    const compSelection = getComputerChoice();
    playRound(compSelection, humanSelection);

    if (humanScore === maxPoints || computerScore === maxPoints) {
      declareWinner();
    }
  }
});

/*
function playGame(n = 1) {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < n; i++) {
    const compSelection = getComputerChoice();
    const humanSelection = getHumanChoice();

    let winner = playRound(compSelection, humanSelection);
    if (winner === "human") {
      humanScore++;
    } else if (winner === "computer") {
      computerScore++;
    }
  }

  if (humanScore === computerScore) {
    alert(`Match is a tie! ${humanScore} - ${computerScore}`);
  } else if (humanScore > computerScore) {
    alert(`Human wins the match! ${humanScore} - ${computerScore}`);
  } else {
    alert(`Computer wins the match! ${humanScore} - ${computerScore}`);
  }
}
*/

// global
