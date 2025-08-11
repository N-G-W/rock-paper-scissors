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




let humanScore = 0;
let computerScore = 0;
let div = document.createElement("div")
let score=document.createElement("p")
function playGame(humanChoice) {

    function playRound(humanChoice, computerChoice) {
        let paragraph = document.createElement("p")
        paragraph.textContent = ""
        
        switch (humanChoice) {
            case "rock":
                if (computerChoice == "paper") {
                    
                    paragraph.textContent="You lose! Paper beats Rock."
                    computerScore++
                }
                else if(computerChoice == "scissors"){
                    paragraph.textContent="You Win! Rock beats Scissors."
                    humanScore++
                }
                else {
                    paragraph.textContent="Its a draw!"
                }
                break;
            case "paper":
                if ( computerChoice == "scissors") {
                    paragraph.textContent="You lose! Scissors beats Paper."
                    computerScore++
                }
                else if( computerChoice == "rock") {
                    paragraph.textContent="You Win! Paper beats Rock."
                    humanScore++
                }
                else {
                    paragraph.textContent="Its a draw!"
                }
                break;
            case "scissors":
                if (computerChoice == "rock") {
                    paragraph.textContent="You lose! Rock beats Scissors."
                    computerScore++
        }
                else if (computerChoice == "paper") {
                    paragraph.textContent="You Win! Scissors beats Paper."
                    humanScore++
        }
                else {
                    paragraph.textContent="Its a draw!"
                }
                break;
            default:
                console.log("Uhh Ohh")
        }
    
        div.appendChild(paragraph)
    }
    // let i = 0;
    // while (i < 5) {
    // let humanChoice = getHumanChoice()
    let computerChoice= getComputerChoice()
    playRound(humanChoice, computerChoice)
    score.textContent=  `Score:${humanScore}`
    //     ++i;
    // }
    if (humanScore == 5 || computerScore == 5) {
        if (humanScore > computerScore) {
        alert("Congratulations! You Win!")
    }
    else if(humanScore<computerScore) {
        alert("You Lose!!!!!!!!!!!!")
    }
    else {
        alert("its a draw ...")
    }
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
body.append(score,rockButton,scissorsButton,paperButton,div)

rockButton.addEventListener("click", () => {
    playGame("rock")
})

scissorsButton.addEventListener("click", () => {
    playGame("scissors")
})

paperButton.addEventListener("click", () => {
    playGame("paper")
})
