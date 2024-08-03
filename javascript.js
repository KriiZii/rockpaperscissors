function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let randomnumber = getRandomInt(3);
    if (randomnumber === 0) {
        return "Rock";
    }
    else if (randomnumber === 1) {
        return "Paper";
    }
    else if (randomnumber === 2) {
        return "Scissors";
    }
    else {
        return "Something went wrong";
    }
}