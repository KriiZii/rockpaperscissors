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