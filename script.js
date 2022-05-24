function computerPlay(){
    const choices = ["rock", "paper", "scissors"];

    // Returns random string from array
    return randomChoice = choices[Math.floor(Math.random() * choices.length)];
}


// Logs the computer's hand
console.log("AI: " + computerPlay());

// Init static player hand & Logs it
let playerSelection = "rock";
console.log("You: " + playerSelection)

// Computer's hand is set as the parameter
const computerSelection = computerPlay(); 

// Play one round of RPS
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return "Tie";
    }
    else if (playerSelection == "rock"){
        if(computerSelection == "scissors"){
            return "Win";
        } else {
            return "Loss";
        }
    }
    else if (playerSelection == "paper"){
        if(computerSelection == "rock"){
            return "Win";
        } else {
            return "Loss";
        }
    }
    else if (playerSelection == "scissors"){
        if (computerSelection == "paper"){
            return "Win";
        } else {
            return "Loss";
        }
    } 
}
playRound(playerSelection, computerSelection);
computerPlay();
// Log Result --- Random results (works, but doesn't work; logic error)
console.log(playRound(playerSelection, computerSelection));
