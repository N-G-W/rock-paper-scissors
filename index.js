console.log("Hello World!");

function getComputerChoice() {
    let choiceNumber = getRandomChoice()
    let choice
    if (choiceNumber == 0) {
        choice="Rock"
    }
    else if (choiceNumber==1) {
        choice="Scissors"
    }
    else {
        choice="Paper"
    }
    return choice
}

function getRandomChoice() {
    return Math.floor((2.99 * Math.random()))    
}


function getHumanChoice() {
    let humanChoice = prompt("Pick rock, paper or scissors:")
    if (humanChoice.toLowerCase() == "rock") {
        return humanChoice
    }
    else if (humanChoice.toLowerCase() == "paper") {
        return humanChoice
    }
    else if (humanChoice.toLowerCase() == "scissor" || humanChoice.toLowerCase() == "scissors") {
        return humanChoice
    }
    else {
        alert("Sorry invalid Input Please choose a Valid Option!")
    }
}

let play=prompt("Want to play a game of Rock, Paper and Scissors?")
console.log(getHumanChoice())