function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3); // random 0, 1, 2
    if (choice === 0) return "rock";
    if (choice === 1) return "paper";
    if (choice === 2) return "scissors";
}

function getHumanChoice() {
    while (true) {
        let input = prompt("Rock, Paper, or Scissors? (Type here): ");

        input = input.trim().toLowerCase();
        if (input === "rock" || input === "paper" || input === "scissors") return input;

        alert("Input is not valid.");
    } 
}

function playRound(compChoice, humanChoice) {
    if (
        (compChoice === "rock" && humanChoice === "paper") ||
        (compChoice === "paper" && humanChoice === "scissors") ||
        (compChoice === "scissors" && humanChoice === "rock") 
    ) {
        alert(`Human wins! ${humanChoice} beats ${compChoice}`);
        return "human";
    }
    
    if (
        (compChoice === "paper" && humanChoice === "rock") ||
        (compChoice === "scissors" && humanChoice === "paper") ||
        (compChoice === "rock" && humanChoice === "scissors") 
    ) {
        alert(`Computer wins! ${compChoice} beats ${humanChoice}`);
        return "computer";
    }
    
    if (compChoice === humanChoice) {
        alert("Draw!");
        return;
    }
    else {
        alert("invalid");
        return;
    }
}

function playGame(n) {
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

// global
playGame(5); // 5 rounds
