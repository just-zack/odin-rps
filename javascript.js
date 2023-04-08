let playerScore = 0;
let computerScore = 0;
let playersChoice = ""
let computersChoice = ""

function getComputerChoice () {
    let gameChoices = ["Rock", "Paper", "Scissors"];
    let randChoice = gameChoices [Math.floor(Math.random () * gameChoices.length)];
    return randChoice;
}

function getPlayerChoice () {
    let userChoice = prompt ("Please enter Rock, Paper, or Scissors");
    if (userChoice === null) {
        return userChoice;
    } else {
        userChoice = userChoice.toLowerCase();
        return userChoice;
}
}
function playRound (playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "Paper") {
        computerScore++;
        playersChoice = playerSelection.toUpperCase();
        computersChoice = computerSelection.toUpperCase();
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "Rock") {
        playersChoice = playerSelection.toUpperCase();
        computersChoice = computerSelection.toUpperCase();
        return "You Tie! Rock ties Rock";
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        playerScore++;
        playersChoice = playerSelection.toUpperCase();
        computersChoice = computerSelection.toUpperCase();
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        playerScore++;
        playersChoice = playerSelection.toUpperCase();
        computersChoice = computerSelection.toUpperCase();
        return "You Win! Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        computerScore++;
        playersChoice = playerSelection.toUpperCase();
        computersChoice = computerSelection.toUpperCase();
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "Scissors") {
        playersChoice = playerSelection.toUpperCase();
        computersChoice = computerSelection.toUpperCase();
        return "You Tie! Scissors tie Scissors";
    } else if (playerSelection === "paper" && computerSelection === "Paper") {
        playersChoice = playerSelection.toUpperCase();
        computersChoice = computerSelection.toUpperCase();
        return "You Tie! Paper ties Paper"
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        playerScore++;
        playersChoice = playerSelection.toUpperCase();
        computersChoice = computerSelection.toUpperCase();
        return "You Win! Paper beats Rock"
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        computerScore++;
        playersChoice = playerSelection.toUpperCase();
        computersChoice = computerSelection.toUpperCase();
        return "You Lose! Scissors beats Paper"
    } else if (playerSelection === null) {
        return "Please choose Rock, Paper, or Scissors"
    } else return "Please choose Rock, Paper, or Scissors"
}

function game () {
    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice ();
        let computerSelection = getComputerChoice ();
        console.log(playRound (playerSelection, computerSelection));
        console.log(playersChoice, computersChoice);
        console.log(playerScore, computerScore);
    }
}
game()