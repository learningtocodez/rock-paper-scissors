
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

//console.log((playScore,computerScore));
//console.log(playScore);
//console.log(computerScore);


//Player selection string "rock, paper, scissors";
//const playerSelection = prompt("rock, paper, scissors");
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));

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

function game() {
    for (let i = 0; i < 5; i++) {
    let playerSelection = prompt ("Rock,Paper,Scissors").toLowerCase();
    while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        playerSelection = prompt("WARNING!! rock, paper, scissors choice only");      
    }
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    } 
}

game();
    if (playScore > computerScore) {
    console.log("Game over player wins!");
    }else if (computerScore > playScore) {   
    console.log("Game over computer wins!");  
    }else if (playScore == computerScore) {
    console.log("Draw");    
}





//Below not to be included in the rest just for reading in order to finish off project.
//What you currently need to resolve with the game() code. 
/*
That’s what I was inferring when I said you need to tweak the conditions. Right now, the winner is ONLY declared if one of the players score reaches 5 (aka wins every round). We don’t have anything written to cover all options. 

But realistically, think how you would declare the winner if you and me were playing 5 rounds. How would we figure out who won at the end of the 5 rounds? 

What if you won 3 rounds and I won 1 and we drew 1?

What if I won 4 rounds and you won 1? 

What if every round was a draw?
*/


   
    //return `Game over computer wins!`
    //console.log("Game over computer wins!");    

//console.log(++playScore);
//console.log(++computerScore);

//Calling game, needs to be done outside of the function itself so you know when it starts.

//pseudo code below.
/*
Work out who wins the game, playerSelection || computerSelection.

How to write the winner of the game after five rounds in javascript? <<Proper question in pseudo code 

Display winner at the end of 5 rounds.

If the player enters incorrect words or information game needs to return or console.log error msg.
*/


//Bugs pseudo code.
/*
What do I need from my program in order to determine who wins the game?

How would my victory message look in Javascript? Should it be called upon via my victory function / condition?

What are the few acceptable answers from User Input (our biggest potential for errors) rendering the rest as an immediate discard?
*/

//Do second issue figure out how to stop incorrect things been added.
/*
Javascript how to work out who has won the total amount of games of rock paper scissors
 and display it at the end of the game?


1. We need to work out who's won the game and display the winner at the end of the 5 rounds.

2. figure out what we want to do if player enters sandpaper, or egg, or ROCK, or nothing, or clicks cancel.
*/