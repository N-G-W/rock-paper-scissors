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
    return choice.toLowerCase()
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
    else if ( humanChoice.toLowerCase() == "scissors") {
        return humanChoice
    }
    else {
        alert("Sorry invalid Input Please choose a Valid Option!")
    }
}



let play = prompt("Want to play a game of Rock, Paper and Scissors?");

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    switch (humanChoice) {
        case "rock":
            if (computerChoice == "paper") {
                console.log("You lose! Paper beats Rock.")
                computerScore++
            }
            else if(computerChoice == "scissors"){
                console.log("You Win! Rock beats Scissors.")
                humanScore++
            }
            else {
                console.log("Its a draw!")
            }
            break;
        case "paper":
            if ( computerChoice == "scissors") {
                console.log("You lose! Scissors beats Paper.")
                computerScore++
            }
            else if( computerChoice == "rock") {
                console.log("You Win! Paper beats Rock.")
                humanScore++
            }
            else {
                console.log("Its a draw!")
            }
            break;
        case "scissors":
             if (computerChoice == "rock") {
                 console.log("You lose! Rock beats Scissors.")
                 computerScore++
    }
             else if (computerChoice == "paper") {
                 console.log("You Win! Scissors beats Paper.")
                 humanScore++
    }
             else {
                 console.log("Its a draw!")
            }
            break;
        default:
            console.log("Uhh Ohh")
    }
   
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(humanSelection,computerSelection)
playRound(humanSelection, computerSelection);
console.log(humanScore,computerScore)