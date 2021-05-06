let resultsDiv = document.querySelector('#results');
resultsDiv.textContent = 'Welcome to the thunderdome';

let scoreDiv = document.querySelector('#score');
scoreDiv.textContent = 'Current score';

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let weaponsBtns = document.querySelectorAll('.weapons');
let playerChoice = document.querySelector('#player-choice');

let playerWinCount = 0;
let computerWinCount = 0;
let draws = 0;

// Array of weapons used for the AI to choose from
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

function generateWeaponBtns() {
    let rock = document.createElement('button');
    let paper = document.createElement('button');
    let scissors = document.createElement('button');

    rock.textContent = 'Rock';
    paper.textContent = 'Paper';
    scissors.textContent = 'Scissors';
    
    rock.setAttribute('id', 'rock');
    paper.setAttribute('id', 'paper');
    scissors.setAttribute('id', 'scissors');

    rock.addEventListener('click', () => {
        weaponClickEvent('rock');
    });
    paper.addEventListener('click', () => {
        weaponClickEvent('paper');
    });
    scissors.addEventListener('click', () => {
        weaponClickEvent('scissors');
    });

    playerChoice.appendChild(rock);
    playerChoice.appendChild(paper);
    playerChoice.appendChild(scissors);
}

function removeWeaponsBtns(parentNode) {
    while(parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
    }
}

function generateResetBtn() {
    let resetBtn = document.createElement('button');
    resetBtn.textContent = 'Play again';
    resetBtn.addEventListener('click', () => {
        resetGame();
        resultsDiv.textContent = "Welcome to the thunderdome";
        playerChoice.removeChild(resetBtn);
        generateWeaponBtns();
    });
    playerChoice.appendChild(resetBtn);
}

function resetGame() {
    playerWinCount = 0;
    computerWinCount = 0;
    draws = 0;
    displayScore(playerWinCount, computerWinCount);
}

function displayScore(playerScore, computerScore) {
    scoreDiv.textContent = `Player: ${playerScore} | Computer ${computerScore} | Draws ${draws}`;
}

function checkForWinner() {
    if (playerWinCount >= 5) {
        resultsDiv.textContent = 'You WON! Play again?';
        removeWeaponsBtns(playerChoice);
        generateResetBtn();
    } else if (computerWinCount >= 5) {
        resultsDiv.textContent = 'You LOST! Play again?';
        removeWeaponsBtns(playerChoice);
        generateResetBtn();
    }
}

// Click event for the buttons (Plays a round, iterates on player or PC win count, updates score, checks for a winner)
function weaponClickEvent(weapon) {
    currentRound = playRound(weapon, computerPlay());
    if (currentRound === 'win') {
        playerWinCount++;
    } else if (currentRound === 'loss') {
        computerWinCount++;
    } else {
        draws++;
    }
    displayScore(playerWinCount, computerWinCount);
    checkForWinner();
}

// Main game 
function game() {
    generateWeaponBtns();
}


game();
