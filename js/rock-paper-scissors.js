let resultsDiv = document.querySelector('#results');
resultsDiv.textContent = 'Welcome to the thunderdome';

let scoreDiv = document.querySelector('#score');
scoreDiv.textContent = 'Current score';

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

let playerWinCount = 0;
let computerWinCount = 0;
let draws = 0;

// Array of weapons used for the game
const weapons = ['rock', 'paper', 'scissors'];

// Generates a random whole number 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Returns a random weapon from weapons array
function computerPlay() {
    return weapons[getRandomInt(3)];
}

// Plays a round of rock, paper, scissors
function playRound(playerSelection, computerSelection) {
    // Checks all possible conditions between player and computer
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        resultsDiv.textContent = "Both chose rock. Draw";
        return "draw";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        resultsDiv.textContent = "You chose rock. Computer chose scissors. You win";
        return "win";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        resultsDiv.textContent = "You chose rock. Computer chose paper. You lose";
        return "loss";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        resultsDiv.textContent = "You chose paper. Computer chose rock. You win";
        return "win";
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        resultsDiv.textContent = "You chose paper. Computer chose paper. Draw";
        return "draw";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        resultsDiv.textContent = "You chose paper. Computer chose scissors. You lose";
        return "loss";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        resultsDiv.textContent = "You chose scissors. Computer chose rock. You lose";
        return "loss"
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        resultsDiv.textContent = "You chose scissors. Computer chose paper. You win";
        return "win";
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        resultsDiv.textContent = "You chose scissors. Computer chose scissors. Draw";
        return "draw";
    } else {
        return "ERROR";
    }
}

function displayScore(playerScore, computerScore) {
    scoreDiv.textContent = `Player: ${playerScore} | Computer ${computerScore}`;
}

function checkForWinner() {
    if (playerWinCount >= 5) {
        resultsDiv.textContent = 'You WON!';
        playerWinCount = 0;
        computerWinCount = 0;
        return;
    } else if (computerWinCount >= 5) {
        resultsDiv.textContent = 'You LOST! You suck!';
        playerWinCount = 0;
        computerWinCount = 0;
        return;
    }
}

function game() {
    rock.addEventListener('click', () => {
        currentRound = playRound('rock', computerPlay());
        if (currentRound === 'win') {
            playerWinCount++;
        } else if (currentRound === 'loss') {
            computerWinCount++;
        } else {
            draws++;
        }
        displayScore(playerWinCount, computerWinCount);

        checkForWinner();
    });
    paper.addEventListener('click', () => {
        currentRound = playRound('paper', computerPlay());
        if (currentRound === 'win') {
            playerWinCount++;
        } else if (currentRound === 'loss') {
            computerWinCount++;
        } else {
            draws++;
        }
        displayScore(playerWinCount, computerWinCount);

        checkForWinner();
    });
    scissors.addEventListener('click', () => {
        currentRound = playRound('scissors', computerPlay());
        if (currentRound === 'win') {
            playerWinCount++;
        } else if (currentRound === 'loss') {
            computerWinCount++;
        } else {
            draws++;
        }
        displayScore(playerWinCount, computerWinCount);

        checkForWinner();
    });

}

game();
