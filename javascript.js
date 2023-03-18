//Write a function that allows the computer to select from rock, paper, or scissors randomly;
function getComputerChoice(){
    const select = ["rock", "paper", "scissors"];
    return select [Math.floor (Math.random() *  select.length)];
}

//write a game() function and call playRound inside to play 5 round game that can keep score
//and report a winner and loser at the end. 
//play 5 round game that keeps score and reports winner or loser at the end.

let playScore = 0;  // keeps score, reports winner write out.
let computerScore = 0; // keeps score, reports winner write out.
let draw = 0; //starts out as this, which it does currently.
//const game = function

function game() {
    for (let i = 0; i < 5; i++); {
    	playRound(playerSelection, computerSelection);
        
    } 
}
    

//console.log((playScore,computerScore));
//console.log(playScore);
//console.log(computerScore);


//Write a function that plays a single round of rock paper scissors;
//The function should take two parameters, playerSelection and computerSelection;
//return a string that declares the winner of the round example: "You Lose! computerSelection beats playersSelection";
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `draw ${playerSelection}`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playScore += 1;
        console.log(playScore);
        return `Winner rock beats scissors`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playScore += 1;
        console.log(playScore);
        return `Winner paper beats rock`;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playScore += 1;
        console.log(playScore);
        return `Winner scissors beat paper`;
    
    } else if  (computerScore += 1);  {
        console.log(computerScore);
    } return`You lose! ${computerSelection} beats ${playerSelection}`;
     
}
//Player selection string "rock, paper, scissors";
const playerSelection = prompt("rock, paper, scissors");
const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));
game(playerSelection, computerSelection);{
   playScore += 1;
   computerScore += 1;
}
console.log('playScore = ' + playScore);
console.log('computerScore = ' + computerScore);
