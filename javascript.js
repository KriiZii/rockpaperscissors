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

function getHumanChoice() {
    let choice = prompt("What is your choice human?");
    if (choice.toLowerCase() === "rock" || choice.toLowerCase() === "paper" || choice.toLowerCase() === "scissors") {
        return choice.toLowerCase();
    }
    else {
        console.log("Wrong input, try again");
        getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

const score = document.querySelector(".score");
const human = document.querySelector(".human");
const computer = document.querySelector(".computer");
const results = document.querySelector(".results");

function playRound(humanChoice, computerChoice) {
    console.log(`Your choice is: ${humanChoice}`);
    human.textContent = `Your choice is: ${humanChoice}`;
    console.log(`The computers choice is: ${computerChoice}`);
    computer.textContent = `The computers choice is: ${computerChoice}`;
    if (humanChoice === computerChoice) {
        console.log("Draw! No one gets points");
        console.log(`You: ${humanScore}, Computer: ${computerScore}`);
        results.textContent = "Draw! No one gets points";
        score.textContent = `You: ${humanScore}, Computer: ${computerScore}`;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock!");
        results.textContent = "You lose! Paper beats Rock!";
        computerScore ++;
        console.log(`You: ${humanScore}, Computer: ${computerScore}`);
        score.textContent = `You: ${humanScore}, Computer: ${computerScore}`;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors!");
        results.textContent = "You win! Rock beats Scissors!";
        humanScore ++;
        console.log(`You: ${humanScore}, Computer: ${computerScore}`);
        score.textContent = `You: ${humanScore}, Computer: ${computerScore}`;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beat Paper!");
        results.textContent = "You lose! Scissors beat Paper!";
        computerScore ++;
        console.log(`You: ${humanScore}, Computer: ${computerScore}`);
        score.textContent = `You: ${humanScore}, Computer: ${computerScore}`;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock!");
        results.textContent = "You win! Paper beats Rock!";
        humanScore ++;
        console.log(`You: ${humanScore}, Computer: ${computerScore}`);
        score.textContent = `You: ${humanScore}, Computer: ${computerScore}`;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors!");
        results.textContent = "You lose! Rock beats Scissors!";
        computerScore ++;
        console.log(`You: ${humanScore}, Computer: ${computerScore}`);
        score.textContent = `You: ${humanScore}, Computer: ${computerScore}`;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beat Paper!");
        results.textContent = "You win! Scissors beat Paper!";
        humanScore ++;
        console.log(`You: ${humanScore}, Computer: ${computerScore}`);
        score.textContent = `You: ${humanScore}, Computer: ${computerScore}`;
    }
    else {
        console.log("Something went wrong!");
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
        console.log(`Your final score is: ${humanScore}, computers final score is: ${computerScore}`);
        score.textContent = `Your final score is: ${humanScore}, computers final score is: ${computerScore}`;
        if (humanScore === computerScore) {
            console.log("Draw! No one wins");
            results.textContent = "Draw! No one wins";
        }
        else if (humanScore > computerScore) {
            console.log("Congratulations! You win!");
            results.textContent = "Congratulations! You win!";
        }
        else if (humanScore < computerScore) {
            console.log("You lost! Imagine losing to a computer");
            results.textContent = "You lost! Imagine losing to a computer";
        }
        else {
            console.log("Something went wrong");
            results.textContent = "Something went wrong";
        }
    }
}