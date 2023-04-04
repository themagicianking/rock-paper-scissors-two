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
    }
    else if (winner === "computer") {
        computerScore = computerScore + 1;
    }
    else {
    }
}

function checkWinner() {

    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            finalresults.textContent = "You won the whole game!";
        }
        else {
            finalresults.textContent = "The computer won the whole game!";
        }
    };
};

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    computerChoice = getComputerChoice(x);
    playRound("Rock", computerChoice);
    scoreBoard(winner);
    results.textContent = message + " Player: " + playerScore + " Computer: " + computerScore;
    checkWinner();
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    computerChoice = getComputerChoice(x);
    playRound("Paper", computerChoice);
    scoreBoard(winner);
    results.textContent = message + " Player: " + playerScore + " Computer: " + computerScore;
    checkWinner();
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    computerChoice = getComputerChoice(x);
    playRound("Scissors", computerChoice);
    scoreBoard(winner);
    results.textContent = message + " Player: " + playerScore + " Computer: " + computerScore;
    checkWinner();
});