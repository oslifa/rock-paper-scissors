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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let roundMessage = `${humanChoice.toUpperCase()} VS. ${computerChoice.toUpperCase()}? `;
        let win;

        if (humanChoice == computerChoice) {
            roundMessage += "IT'S A TIE!"
        } else {
            switch (humanChoice) {
                case "rock":
                    win = "paper";
                    break;
                case "paper":
                    win = "scissors";
                    break;
                case "scissors":
                    win = "rock";
                    break;
            }

            if (computerChoice == win) {
                roundMessage += "YOU LOSE!";
                computerScore++;
            } else {
                roundMessage += "YOU WIN!";
                humanScore++;
            }
        }

        console.log(roundMessage);
    }

    for (let i = 0; i < 5; i++) {
        playRound();
    }

    let endMessage = `PLAYER: ${humanScore} PTS. CPU: ${computerScore} PTS.`;

    if (humanScore == computerScore) {
        console.log(endMessage += ` IT'S A TIE!`);
    } else if (humanScore > computerScore) {
        console.log(endMessage += ` YOU WIN!`);
    } else {
        console.log(endMessage += ` YOU LOSE!`);
    }
}