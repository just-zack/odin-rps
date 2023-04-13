let playerScore = 0;
let computerScore = 0;
let playersChoice = ""
let computersChoice = ""

function getComputerChoice () {
    let gameChoices = ["Rock", "Paper", "Scissors"];
    let randChoice = gameChoices [Math.floor(Math.random () * gameChoices.length)];
    return randChoice;
}

const buttons = document.querySelectorAll('.gameButton');
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
        let playerSelection = playersChoice;
        let computerSelection = getComputerChoice ();

        const results = document.querySelector('#results');
        const currentScore = document.querySelector('.currentScore');
        const roundChoices = document.querySelector('.roundChoices');
        const roundString = document.querySelector('.roundString');

        roundString.textContent = (playRound (playerSelection, computerSelection));
        currentScore.textContent = playerScore + "  " + computerScore;
        roundChoices.textContent = playersChoice.toUpperCase() + " " + computersChoice;
        checkGameEnd ()
    }

    function checkGameEnd () {
        let n = 5; // play to score
        const roundChoices = document.querySelector('.roundChoices');
        const roundString = document.querySelector('.roundString');
        const winner = document.querySelector('.winner');
        if (playerScore === n) {
            winner.textContent = "Game Over! Player Wins";
            buttons.forEach((button) => {
                button.style.display = "none";
            });
            roundString.style.display = "none";
            roundChoices.style.display = "none";
            beginNewGame ();
        } else if (computerScore === n) {
            winner.textContent = "Game Over! Computer Wins";
            buttons.forEach((button) => {
                button.style.display = "none";
            });
            roundString.style.display = "none";
            roundChoices.style.display = "none";
            beginNewGame ();
        }
    }

    function beginNewGame () {
        const newGameButton = document.createElement('button');
        const results = document.querySelector('#results');
        newGameButton.classList.add('newGameButton');
        newGameButton.innerText= "Start a New Game!";
        results.appendChild(newGameButton);
    }