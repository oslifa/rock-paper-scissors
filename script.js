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

let rounds = document.querySelector("#rounds");

function playRound(humanChoice) {
    if (isTieRound) {
        let tieRoundDisplay = document.querySelector(`#round${round}`);
        rounds.removeChild(tieRoundDisplay);
    } else {
        round++;
    }

    if (isGameOver) {
        isGameOver = false;
        rounds.innerHTML = "";
    }
    
    let computerChoice = getComputerChoice();
    let roundMessage = `ROUND ${round}:
        ${humanChoice[0].toUpperCase()}${humanChoice.slice(1)} VS.
        ${computerChoice[0].toUpperCase()}${computerChoice.slice(1)}! `;
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

    const roundMessageDisplay = document.createElement("p");
    roundMessageDisplay.textContent = `${roundMessage}`;

    let scoreMessage = `HUMAN: ${humanScore} PTS. CPU: ${computerScore} PTS.`;
    const scoreDisplay = document.createElement("p");
    scoreDisplay.textContent = `${scoreMessage}`;

    const humanScoreDisplay = document.querySelector("#humanScoreDisplay");
    humanScoreDisplay.textContent = `${humanScore}`;

    const computerScoreDisplay = document.querySelector("#computerScoreDisplay");
    computerScoreDisplay.textContent = `${computerScore}`;

    let gameMessage;

    if (humanScore == 3 || computerScore == 3) {
        if (humanScore > computerScore) {
            gameMessage = ` GAME OVER! YOU WIN!`;
        } else {
            gameMessage = ` GAME OVER! YOU LOSE!`;
        }

        round = 0;
        humanScore = 0;
        computerScore = 0;
        isGameOver = true;
    }

    const gameMessageDisplay = document.querySelector("#gameMessageDisplay");
    gameMessageDisplay.textContent = gameMessage;
    
    const humanChoiceImg = document.createElement("img");
    humanChoiceImg.src = `${humanChoice}.png`

    const computerChoiceImg = document.createElement("img");
    computerChoiceImg.src = `${computerChoice}.png`

    const roundInfo = document.createElement("div");
    roundInfo.id = "#roundInfo";

    roundInfo.appendChild(roundMessageDisplay);
    roundInfo.appendChild(scoreDisplay);
    
    const roundDisplay = document.createElement("div");
    roundDisplay.id = `round${round}`;
    roundDisplay.classList.add("roundDisplay");

    roundDisplay.appendChild(humanChoiceImg);
    roundDisplay.appendChild(roundInfo);
    roundDisplay.appendChild(computerChoiceImg);

    rounds.appendChild(roundDisplay);
}

document.body.addEventListener("click", (event) => {
    if (event.target.classList.contains("choice")) {
        playRound(event.target.id);
    }
})