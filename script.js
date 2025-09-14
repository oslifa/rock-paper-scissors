let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";

        case 1:
            return "paper";

        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt('Type "rock", "paper" or "scissors" to make your choice.').toLowerCase();
    
    switch(choice) {
        case "rock":
            return "rock";
        
        case "paper":
            return "paper";
        
        case "scissors":
             return "scissors";
    }
}

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let message = `${humanChoice.toUpperCase()} VS. ${computerChoice.toUpperCase()}? `;

    if (humanChoice == computerChoice) {
        message += "IT'S A TIE!"
    } else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            message += "YOU LOSE!";
            computerScore++;
        } else if (computerChoice == "scissors") {
            message += "YOU WIN!";
            humanScore++;
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "scissors") {
            message += "YOU LOSE!";
            computerScore++;
        } else if (computerChoice == "rock") {
            message += "YOU WIN!";
            humanScore++;
        }
    } else {
        if (computerChoice == "rock") {
            message += "YOU LOSE!";
            computerScore++;
        } else if (computerChoice == "paper") {
            message += "YOU WIN!";
            humanScore++;
        }
    }

    console.log(message);
}