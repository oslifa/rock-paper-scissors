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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    // function playRound(humanChoice) {
    //     let computerChoice = getComputerChoice();
    //     let roundMessage = `${humanChoice.toUpperCase()} VS. ${computerChoice.toUpperCase()}? `;
    //     let win;

    //     if (humanChoice == computerChoice) {
    //         roundMessage += "IT'S A TIE!"
    //     } else {
    //         switch (humanChoice) {
    //             case "rock":
    //                 win = "paper";
    //                 break;
    //             case "paper":
    //                 win = "scissors";
    //                 break;
    //             case "scissors":
    //                 win = "rock";
    //                 break;
    //         }

    //         if (computerChoice == win) {
    //             roundMessage += "YOU LOSE!";
    //             computerScore++;
    //         } else {
    //             roundMessage += "YOU WIN!";
    //             humanScore++;
    //         }
    //     }

    //     console.log(roundMessage);
    // }

    // for (let i = 0; i < 5; i++) {
    //     playRound();
    // }

    let endMessage = `PLAYER: ${humanScore} PTS. CPU: ${computerScore} PTS.`;

    if (humanScore == computerScore) {
        console.log(endMessage += ` IT'S A TIE!`);
    } else if (humanScore > computerScore) {
        console.log(endMessage += ` YOU WIN!`);
    } else {
        console.log(endMessage += ` YOU LOSE!`);
    }
}

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
        } else {
            roundMessage += "YOU WIN!";
        }
    }

    console.log(roundMessage);
}


document.body.addEventListener("click", (event) => {
    if (event.target.classList.contains("choice")) {
        playRound(event.target.id);
    }
})