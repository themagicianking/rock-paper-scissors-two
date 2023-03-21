let x = Math.floor(Math.random() * 3) + 1;
let computerChoice;

function getComputerChoice(x) {
    if (x === 1) {
        computerChoice = "Rock";
    }
    else if (x ===2) {
        computerChoice = "Paper";
    }
    else {
        computerChoice = "Scissors";
    }
}

getComputerChoice(x);
console.log(computerChoice);

let outcome;

function playRound(playerChoice, computerChoice) {
    if (playerChoice === "Rock" && computerChoice === "Paper") {
        return "You Lose! Paper beats Rock";
    }
    else if (playerChoice === "Paper" && computerChoice === "Scissors") {
        return "You Lose! Scissors beat Paper";
    }
    else if (playerChoice === "Scissor" && computerChoice === "Rock") {
        return "You Lose! Rock beats Scissors";
    }
    else if (playerChoice === "Rock" && computerChoice === "Scissors") {
        return "You Win! Rock beats Scissors";
    }
    else if (playerChoice === "Paper" && computerChoice === "Rock") {
        return "You Win! Paper beats Rock";
    }
    else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        return "You Win! Scissors beats Paper";
    }
    else {
        return "It's a tie!"
    }
}

playRound("Rock", "Scissors");