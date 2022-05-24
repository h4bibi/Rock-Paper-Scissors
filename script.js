function computerPlay(){
    const choices = ["rock", "paper", "scissors"];

    // Returns random string from array
    return randomChoice = choices[Math.floor(Math.random() * choices.length)];
}


// Logs the computer's hand
console.log("AI: " + computerPlay());

// Init player hand & Logs it (Also converts for easy comparisons)
let playerSelection;
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

function game(){
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++){
        playerSelection = prompt("Choose rock, paper, or scissors: ").toLowerCase();
        console.log(playerSelection);
       
        let winner = playRound(playerSelection, computerSelection);
        console.log(winner);
        alert(winner); 

        }

        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
}

game();
playRound(playerSelection, computerSelection);
computerPlay();
// Log Result 
console.log(playRound(playerSelection, computerSelection));
