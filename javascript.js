//Write a function that allows the computer to select from rock, paper, or scissors randomly;
function getComputerChoice(){
    const select = ["rock", "paper", "scissors"];
    return select [Math.floor (Math.random() *  select.length)]; 
}

// playScore
let playScore = 0;  
// computerScore
let computerScore = 0;
// draw 
let draw = 0; 


//Write a function that plays a single round of rock paper scissors;
//The function should take two parameters, playerSelection and computerSelection;
//return a string that declares the winner of the round example: "You Lose! computerSelection beats playersSelection";
function playRound(playerSelection,computerSelection) {
      if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log(++playScore);
        return `Winner rock beats scissors`;   
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log(++playScore);
        return `Winner paper beats rock`; 
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log(++playScore);
        return `Winner scissors beat paper`; 
    } else if (playerSelection === computerSelection) {
        console.log(draw);
        return `draw ${playerSelection} && ${computerSelection}`;
    } else { 
        console.log(++computerScore);
        return`You lose! ${computerSelection} beats ${playerSelection}`;
}
}

let playerSelection = null; 

//write a game() function and call playRound inside to play 5 round game that can keep score 
//play 5 round game that keeps score and reports winner or loser at the end.
function game() {
      for (let i = 0; i < 5; i++) {
        let playerSelection = prompt ("Rock,Paper,Scissors"); {
      if (playerSelection !== null) {
        playerSelection = playerSelection.toLowerCase();  
    }
      while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        playerSelection = prompt("WARNING!! rock, paper, scissors choice only");      
    }
      const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    } 
}
}

//report a winner and loser at the end.
game();
      if (playScore > computerScore) {
        console.log("Game over player wins!");
    } else if (computerScore > playScore) {   
        console.log("Game over computer wins!");  
    } else if (playScore == computerScore) {
        console.log("Draw");    
}