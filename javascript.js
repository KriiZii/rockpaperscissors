function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let randomnumber = getRandomInt(3);
    if (randomnumber === 0) {
        return "rock";
    }
    else if (randomnumber === 1) {
        return "paper";
    }
    else if (randomnumber === 2) {
        return "scissors";
    }
    else {
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

function playRound(humanChoice, computerChoice) {
    console.log(`Your choice is: ${humanChoice}`);
    console.log(`The computers choice is: ${computerChoice}`);
    if (humanChoice === computerChoice) {
        console.log("Draw! No one gets points");
        console.log(`You: ${humanScore}, Computer: ${computerScore}`);
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock!");
        computerScore ++;
        console.log(`You: ${humanScore}, Computer: ${computerScore}`);
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors!");
        humanScore ++;
        console.log(`You: ${humanScore}, Computer: ${computerScore}`);
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beat Paper!");
        computerScore ++;
        console.log(`You: ${humanScore}, Computer: ${computerScore}`);
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock!");
        humanScore ++;
        console.log(`You: ${humanScore}, Computer: ${computerScore}`);
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors!");
        computerScore ++;
        console.log(`You: ${humanScore}, Computer: ${computerScore}`);
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beat Paper!");
        humanScore ++;
        console.log(`You: ${humanScore}, Computer: ${computerScore}`);
    }
    else {
        console.log("Something went wrong!");
    }
}

function playGame() {
    for(let i = 1; i < 6; i++) {
        console.log(`Round ${i}`);
        playRound(getHumanChoice(),getComputerChoice());
        console.log(" ");
    }
}

playGame();
console.log(`Your final score is: ${humanScore}, computers final score is: ${computerScore}`);
if (humanScore === computerScore) {
    console.log("Draw! No one wins");
}
else if (humanScore > computerScore) {
    console.log("Congratulations! You win!");
}
else if (humanScore < computerScore) {
    console.log("You lost! Imagine losing to a computer");
}
else {
    console.log("Something went wrong");
}