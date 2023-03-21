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