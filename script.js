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

let humanScore = 0;
let computerScore = 0;

const roundDisplay = document.querySelector("#roundDisplay");
const scoreDisplay = document.querySelector("#scoreDisplay");

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    let roundMessage = `${humanChoice.toUpperCase()} VS. ${computerChoice.toUpperCase()}: `;
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

    roundDisplay.textContent = `${roundMessage}`;

    let scoreMessage = `PLAYER: ${humanScore} PTS. CPU: ${computerScore} PTS.`;

    if (humanScore == 5 || computerScore == 5) {
        if (humanScore == computerScore) {
            scoreMessage += ` IT'S A TIE!`;
        } else if (humanScore > computerScore) {
            scoreMessage += ` GAME OVER! YOU WIN!`;
        } else {
            scoreMessage += ` GAME OVER! YOU LOSE!`;
        }

        humanScore = 0;
        computerScore = 0;
    }

    scoreDisplay.textContent = `${scoreMessage}`;
}

document.body.addEventListener("click", (event) => {
    if (event.target.classList.contains("choice")) {
        playRound(event.target.id);
    }
})