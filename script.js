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
    let choice = prompt('Type "rock", "paper" or "scissors" to make your choice.');
    
    switch(choice) {
        case "rock":
            return "rock";
        
        case "paper":
            return "paper";
        
        case "scissors":
             return "scissors";
    }
}