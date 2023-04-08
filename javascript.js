
let playerSelection = getPlayerSelection ()
let computerSelection = getComputerChoice ();

let playerScore = 0;
let computerScore = 0;
let resultString = "";
let numberOfGames = 2;

function getComputerChoice () {
    let gameChoices = ["Rock", "Paper", "Scissors"];
    let randChoice = gameChoices [Math.floor(Math.random () * gameChoices.length)];
    return randChoice;
}

function getPlayerSelection () {
    let userChoice = prompt ("Please enter Rock, Paper, or Scissors");
    userChoice = userChoice.toLowerCase();
    return userChoice
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "Paper") {
        computerScore++;
        resultString = "You Lose! Paper beats Rock";
        return resultString;
    } else if (playerSelection === "rock" && computerSelection === "Rock") {
        resultString = "You Tie! Rock ties Rock";
        return resultString;
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        playerScore++;
        resultString = "You Win! Rock beats Scissors";
        return resultString;
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        playerScore++;
        resultString = "You Win! Scissors beats Paper"
        return resultString;
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        computerScore++;
        resultString = "You Lose! Rock beats Scissors";
        return resultString
    } else if (playerSelection === "scissors" && computerSelection === "Scissors") {
        resultString = "You Tie! Scissors tie Scissors";
        return resultString;
    } else if (playerSelection === "paper" && computerSelection === "Paper") {
        resultString = "You Tie! Paper ties Paper";
        return resultString;
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        playerScore++;
        resultString = "You Win! Paper beats Rock";
        return resultString;
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        computerScore++;
        resultString = "You Lose! Scissors beats Paper";
        return resultString;
    } else return "Please choose Rock, Paper, or Scissors"
}

function game (playerSelection, computerSelection) {
    playRound (playerSelection, computerSelection);
    playRound (playerSelection, computerSelection);
    playRound (playerSelection, computerSelection);
    playRound (playerSelection, computerSelection);

}

console.log (game (playerSelection, computerSelection));
console.log (playerScore);
console.log (computerScore);


 
/*
 function gameTally () {
    let computerWinCount = 0;
    let userWinCount = 0;
}

function game() {
    for (let i=1; i <= 5; i++) {
    playRound(playerSelection, computerSelection); }

}
*/


