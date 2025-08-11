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
    humanChoice=humanChoice.toLowerCase()
    if (humanChoice == "rock") {
        return humanChoice
    }
    else if (humanChoice == "paper") {
        return humanChoice
    }
    else if ( humanChoice == "scissors") {
        return humanChoice
    }
    else {
        alert("Sorry invalid Input Please choose a Valid Option!")
    }
}




function playGame(humanChoice) {
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
    // let i = 0;
    // while (i < 5) {
    // let humanChoice = getHumanChoice()
    let computerChoice= getComputerChoice()
    playRound(humanChoice,computerChoice)
    //     ++i;
    // }
    if (humanScore > computerScore) {
        console.log("Congratulations! You win!")
    }
    else if(humanScore<computerScore) {
        console.log("You Lose!!!!!!!!!!!!")
    }
    else {
        console.log("its a draw ...")
    }
}

let body = document.querySelector("body")
let rockButton = document.createElement("button")
let scissorsButton = document.createElement("button")
let paperButton = document.createElement("button")

rockButton.textContent = "Rock"
scissorsButton.textContent = "Scissors"
paperButton.textContent = "Paper"
// body.appendChild(rockButton)
body.append(rockButton,scissorsButton,paperButton)

rockButton.addEventListener("click", () => {
    playGame("rock")
})

scissorsButton.addEventListener("click", () => {
    playGame("scissors")
})

paperButton.addEventListener("click", () => {
    playGame("paper")
})
