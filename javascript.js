function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    switch (getRandomInt(3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "Something went wrong";
    }
}

let humanScore = 0;
let computerScore = 0;

const score = document.querySelector(".score");
const human = document.querySelector(".human");
const computer = document.querySelector(".computer");
const results = document.querySelector(".results");

function playRound(humanChoice, computerChoice) {
    human.textContent = `Your choice is: ${humanChoice}`;
    computer.textContent = `The computers choice is: ${computerChoice}`;
    if (humanChoice === computerChoice) {
        results.textContent = "Draw! No one gets points";
        score.textContent = `You: ${humanScore}, Computer: ${computerScore}`;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        results.textContent = "You lose! Paper beats Rock!";
        computerScore ++;
        score.textContent = `You: ${humanScore}, Computer: ${computerScore}`;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        results.textContent = "You win! Rock beats Scissors!";
        humanScore ++;
        score.textContent = `You: ${humanScore}, Computer: ${computerScore}`;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        results.textContent = "You lose! Scissors beat Paper!";
        computerScore ++;
        score.textContent = `You: ${humanScore}, Computer: ${computerScore}`;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        results.textContent = "You win! Paper beats Rock!";
        humanScore ++;
        score.textContent = `You: ${humanScore}, Computer: ${computerScore}`;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        results.textContent = "You lose! Rock beats Scissors!";
        computerScore ++;
        score.textContent = `You: ${humanScore}, Computer: ${computerScore}`;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        results.textContent = "You win! Scissors beat Paper!";
        humanScore ++;
        score.textContent = `You: ${humanScore}, Computer: ${computerScore}`;
    }
    else {
        results.textContent = "Something went wrong!";
    }
    checkScore();
}

const container = document.querySelector(".container");
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

rock.classList.add("choiceButton");
rock.textContent = "Rock";
paper.classList.add("choiceButton");
paper.textContent = "Paper";
scissors.classList.add("choiceButton");
scissors.textContent = "Scissors";

container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);

rock.addEventListener("click", function() { playRound("rock", getComputerChoice()) });
paper.addEventListener("click", function() { playRound("paper", getComputerChoice()) });
scissors.addEventListener("click", function() { playRound("scissors", getComputerChoice()) });

function checkScore() {
    if (humanScore > 4 || computerScore > 4) {
        score.textContent = `Your final score is: ${humanScore}, computers final score is: ${computerScore}`;
        if (humanScore === computerScore) {
            results.textContent = "Draw! No one wins";
        }
        else if (humanScore > computerScore) {
            results.textContent = "Congratulations! You win!";
        }
        else if (humanScore < computerScore) {
            results.textContent = "You lost! Imagine losing to a computer";
        }
        else {
            results.textContent = "Something went wrong";
        }
    }
}