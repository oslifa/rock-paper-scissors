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
    let roundMessage = `${humanChoice[0].toUpperCase()}${humanChoice.slice(1)}
        VS. ${computerChoice[0].toUpperCase()}${computerChoice.slice(1)}! `;
    let win;
    isTieRound = false;
    let humanColour;
    let computerColour;

    if (humanChoice == computerChoice) {
        roundMessage += "It's a tie! Redo!"
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
            roundMessage += "You lose!";
            computerScore++;
            humanColour = "#dd0000";
            computerColour = "#00aa00";
        } else {
            roundMessage += "You win!";
            humanScore++;
            humanColour = "#00aa00";
            computerColour = "#dd0000";
        }
    }

    const roundMessageDisplay = document.createElement("div");
    roundMessageDisplay.classList.add("roundMessageDisplay");
    roundMessageDisplay.textContent = `${roundMessage}`;

    const scoreDisplay = document.querySelector("#scoreDisplay");
    scoreDisplay.textContent = `${humanScore} : ${computerScore}`;

    let gameMessage = "&nbsp;";

    if (humanScore == 4 || computerScore == 4) {
        if (humanScore > computerScore) {
            gameMessage = `GAME OVER! You win!`;
        } else {
            gameMessage = `GAME OVER! You lose!`;
        }

        scoreDisplay.textContent = gameMessage;

        round = 0;
        humanScore = 0;
        computerScore = 0;
        isGameOver = true;
    }
    
    const humanChoiceImg = document.createElement("img");
    humanChoiceImg.src = `${humanChoice}.png`;
    humanChoiceImg.style.backgroundColor = humanColour;

    const computerChoiceImg = document.createElement("img");
    computerChoiceImg.src = `${computerChoice}.png`;
    computerChoiceImg.style.backgroundColor = computerColour;
    
    const roundDisplay = document.createElement("div");
    roundDisplay.id = `round${round}`;
    roundDisplay.classList.add("roundDisplay");

    if (round != 1) {
        roundDisplay.style.borderTop = "2px solid #ffffff";
    }

    roundDisplay.appendChild(humanChoiceImg);
    roundDisplay.appendChild(roundMessageDisplay);
    roundDisplay.appendChild(computerChoiceImg);

    rounds.appendChild(roundDisplay);
}

document.body.addEventListener("click", (event) => {
    if (event.target.classList.contains("choice")) {
        playRound(event.target.id);
    }
})