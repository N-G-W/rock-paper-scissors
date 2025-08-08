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

console.log(getComputerChoice())