let playerScore = 0;
let computerScore = 0;
let playersChoice = ""
let computersChoice = ""

function getComputerChoice () {
    let gameChoices = ["Rock", "Paper", "Scissors"];
    let randChoice = gameChoices [Math.floor(Math.random () * gameChoices.length)];
    return randChoice;
}
/*
function getPlayerChoice () {
    let userChoice = prompt ("Please enter Rock, Paper, or Scissors");
    if (userChoice === null) {
        return userChoice;
    } else {
        userChoice = userChoice.toLowerCase();
        return userChoice;
}
*/
// have user select button
/* This is the single item selector
const rock = document.querySelector('#rock');
rock.addEventListener ("click", () => {
    playersChoice = "rock";
    game ();
});
*/

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playersChoice = button.id;
        game ();
    })
})

function playRound (playerSelection, computerSelection) {
    playersChoice = playerSelection.toUpperCase();
    computersChoice = computerSelection.toUpperCase();
    if (playerSelection === "rock" && computerSelection === "Paper") {
        computerScore++;
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "Rock") {
        return "You Tie! Rock ties Rock";
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        playerScore++;
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        playerScore++;
        return "You Win! Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        computerScore++;
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "Scissors") {
        return "You Tie! Scissors tie Scissors";
    } else if (playerSelection === "paper" && computerSelection === "Paper") {
        return "You Tie! Paper ties Paper"
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        playerScore++;
        return "You Win! Paper beats Rock"
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        computerScore++;
        return "You Lose! Scissors beats Paper"
    } else if (playerSelection === null) {
        return "Please choose Rock, Paper, or Scissors"
    } else return "Please choose Rock, Paper, or Scissors"
}

function game () {
/*
    for (let i = 0; i < 5; i++) {
*/
        let playerSelection = playersChoice;
        let computerSelection = getComputerChoice ();
        console.log(playRound (playerSelection, computerSelection));
        console.log(playersChoice, computersChoice);
        console.log(playerScore, computerScore);
/*
    }
*/
}