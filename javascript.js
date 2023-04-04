/*function getPlayerChoice() {
    let input = prompt("Would you like to choose rock, paper, or scissors?");
    let output = input.toLowerCase();

    if (output === "rock") {
        return "Rock";
    }
    else if (output === "paper") {
        return "Paper";
    }
    else if (output === "scissors") {
        return "Scissors";
    }
    else {
        alert("Error: invalid input. Scissors has been chosen for you.");
        return "Scissors";
    }
}*/

let computerChoice;
let x;

function getComputerChoice() {
    x = Math.floor(Math.random() * 3) + 1;

    if (x === 1) {
        computerChoice = "Rock";
    }
    else if (x ===2) {
        computerChoice = "Paper";
    }
    else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

let winner;
let message;

function playRound(playerChoice, computerChoice) {
    if (playerChoice === "Rock" && computerChoice === "Paper") {
        winner = "computer"
        message = "You Lose! Paper beats Rock";
    }
    else if (playerChoice === "Paper" && computerChoice === "Scissors") {
        winner = "computer"
        message = "You Lose! Scissors beat Paper";
    }
    else if (playerChoice === "Scissors" && computerChoice === "Rock") {
        winner = "computer"
        message = "You Lose! Rock beats Scissors";
    }
    else if (playerChoice === "Rock" && computerChoice === "Scissors") {
        winner = "player"
        message = "You Win! Rock beats Scissors";
    }
    else if (playerChoice === "Paper" && computerChoice === "Rock") {
        winner = "player"
        message = "You Win! Paper beats Rock";
    }
    else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        winner = "player"
        message = "You Win! Scissors beats Paper";
    }
    else {
        winner = "null"
        message = "It's a tie!"
    }
}

let playerScore = 0;
let computerScore = 0;

function scoreBoard(winner) { 
    if (winner === "player") {
        playerScore = playerScore + 1;
        console.log(playerScore);
    }
    else if (winner === "computer") {
        computerScore = computerScore + 1;
    }
    else {
    }
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    computerChoice = getComputerChoice(x);
    playRound("Rock", computerChoice);
    scoreBoard(winner);
    results.textContent = message + " Player: " + playerScore + " Computer: " + computerScore;
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    computerChoice = getComputerChoice(x);
    playRound("Paper", computerChoice);
    scoreBoard(winner);
    results.textContent = message + " Player: " + playerScore + " Computer: " + computerScore;
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    computerChoice = getComputerChoice(x);
    playRound("Scissors", computerChoice);
    scoreBoard(winner);
    results.textContent = message + " Player: " + playerScore + " Computer: " + computerScore;
});

function game() {
    let playerScore = 0;
    let computerScore = 0;

    /* for (let i = 0; i < 5; i++) {
        playerChoice = getPlayerChoice();
        computerChoice = getComputerChoice(x);
        playRound(playerChoice, computerChoice);
        console.log(message);

        if (winner === "player") {
            playerScore = playerScore + 1;
        }
        else if (winner === "computer") {
            computerScore = computerScore + 1;
        }
        else {}
    }*/

    if (playerScore > computerScore) {
        console.log("You won the round!")
    }
    else if (playerScore < computerScore) {
        console.log("The computer won the round!")
    }
    else {
        console.log("The round ends in a tie!")
    }
};

//game();