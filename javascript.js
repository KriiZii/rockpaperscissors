function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function getComputerChoice() {
    switch (getRandomInt(3)) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
        default:
            return "Something went wrong"
    }
}

let humanScore = 0
let computerScore = 0
let gameEnd = false

const score = document.querySelector(".score")
const human = document.querySelector(".human")
const computer = document.querySelector(".computer")
const results = document.querySelector(".results")
const finalscore = document.querySelector(".finalscore")

function playRound(humanChoice) {
    if (!gameEnd) {
        let computerChoice = getComputerChoice()
        human.textContent = `Your choice is: ${humanChoice}`
        computer.textContent = `The computers choice is: ${computerChoice}`
    
        if (humanChoice === computerChoice) {
            results.textContent = "Draw! No one gets points"
            score.textContent = `You: ${humanScore}, Computer: ${computerScore}`
        }
        else if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                results.textContent = "You lose! Paper beats Rock!"
                computerScore ++
                score.textContent = `You: ${humanScore}, Computer: ${computerScore}`
            }
            else if (computerChoice === "scissors") {
                results.textContent = "You win! Rock beats Scissors!"
                humanScore ++
                score.textContent = `You: ${humanScore}, Computer: ${computerScore}`
            }
        }
        else if (humanChoice === "paper") {
            if (computerChoice === "scissors") {
                results.textContent = "You lose! Scissors beat Paper!"
                computerScore ++
                score.textContent = `You: ${humanScore}, Computer: ${computerScore}`
            }
            else if (computerChoice === "rock") {
                results.textContent = "You win! Paper beats Rock!"
                humanScore ++
                score.textContent = `You: ${humanScore}, Computer: ${computerScore}`
            }
        }
        else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                results.textContent = "You lose! Rock beats Scissors!"
                computerScore ++
                score.textContent = `You: ${humanScore}, Computer: ${computerScore}`
            }
            else if (computerChoice === "paper") {
                results.textContent = "You win! Scissors beat Paper!"
                humanScore ++
                score.textContent = `You: ${humanScore}, Computer: ${computerScore}`
            }
        }
        else {
            results.textContent = "Something went wrong!"
        }
    }

    checkScore()
}

const container = document.querySelector(".container")
const rock = document.createElement("button")
const paper = document.createElement("button")
const scissors = document.createElement("button")
const resetContainer = document.querySelector(".reset")
const reset = document.createElement("button")

rock.classList.add("choiceButton")
rock.textContent = "Rock"
paper.classList.add("choiceButton")
paper.textContent = "Paper"
scissors.classList.add("choiceButton")
scissors.textContent = "Scissors"
reset.classList.add("resetButton")
reset.textContent = "Reset"


container.appendChild(rock)
container.appendChild(paper)
container.appendChild(scissors)
resetContainer.appendChild(reset)

rock.onclick = () => playRound("rock")
paper.onclick = () => playRound("paper")
scissors.onclick = () => playRound("scissors")
reset.onclick = () => resetFunction()

function checkScore() {
    if (humanScore >= 5 || computerScore >= 5) {
        gameEnd = true
        score.textContent = ""
        finalscore.textContent = `Your final score is: ${humanScore}, computers final score is: ${computerScore}`
        if (humanScore === computerScore) {
            results.textContent = "Draw! No one wins"
        }
        else switch (true) {
            case humanScore > computerScore:
              results.textContent = "Congratulations! You win!"
              break
            case humanScore < computerScore:
              results.textContent = "You lost! Imagine losing to a computer"
              break
            default:
              results.textContent = "Something went wrong"
              break
        }
    }
}

function resetFunction() {
    humanScore = 0
    computerScore = 0
    gameEnd = false
    human.textContent = ""
    computer.textContent = ""
    results.textContent = ""
    score.textContent = ""
    finalscore.textContent = ""
}