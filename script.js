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
let round = 0;
let isTieRound = false;
let isGameOver = false;

let results = document.querySelector("#results");

function playRound(humanChoice) {
    if (isTieRound) {
        let tieContainer = document.querySelector(`#round${round}`);
        results.removeChild(tieContainer);
    } else {
        round++;
    }

    if (isGameOver) {
        isGameOver = false;
        results.innerHTML = "";
    }
    
    let computerChoice = getComputerChoice();
    let roundMessage = `ROUND ${round}: ${humanChoice.toUpperCase()} VS. ${computerChoice.toUpperCase()}! `;
    let win;
    isTieRound = false;

    if (humanChoice == computerChoice) {
        roundMessage += "IT'S A TIE! REDO!"
        isTieRound = true;
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

    const roundDisplay = document.createElement("p");
    roundDisplay.textContent = `${roundMessage}`;

    let scoreMessage = `PLAYER: ${humanScore} PTS. CPU: ${computerScore} PTS.`;
    const scoreDisplay = document.createElement("p");
    scoreDisplay.textContent = `${scoreMessage}`;

    let gameMessage;

    if (humanScore == 5 || computerScore == 5) {
        if (humanScore == computerScore) {
            gameMessage = ` IT'S A TIE!`;
        } else if (humanScore > computerScore) {
            gameMessage = ` GAME OVER! YOU WIN!`;
        } else {
            gameMessage = ` GAME OVER! YOU LOSE!`;
        }

        round = 0;
        humanScore = 0;
        computerScore = 0;
        isGameOver = true;
    }

    const gameDisplay = document.createElement("p");
    gameDisplay.textContent = gameMessage;

    let container = document.createElement("div");
    container.id = `round${round}`;
    
    container.appendChild(roundDisplay);
    container.appendChild(scoreDisplay);
    container.appendChild(gameDisplay);
    
    results.appendChild(container);
}

document.body.addEventListener("click", (event) => {
    if (event.target.classList.contains("choice")) {
        playRound(event.target.id);
    }
})