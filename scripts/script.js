//initial round and win counters
let playerWins = 0
let computerWins = 0
let draws = 0

//function to decide computer's play for the turn
function computerPlay() {
    computerChoice = Math.floor(Math.random() * 3) + 1;

    switch (computerChoice) {
        case 1:
            return "rock";
            break;

        case 2:
            return "paper";
            break;

        case 3:
            return "scissors";
            break;
    }
}

//function to compare player and computer plays for each round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        draws++;
        return "Draw!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerWins++
        return "You Lose! Paper beats Rock!"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerWins++
        return "You Win! Rock beats Scissors!"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerWins++
        return "You Win! Paper beats Rock!"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerWins++
        return "You Lose! Scissors beats Paper!"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerWins++
        return "You Lose! Rock beats Scissors!"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerWins++
        return "You Win! Scissors beats Paper!"
    }
}

//game function to prompt player for choice and send to playRound function
function game(player) {
    let playerChoice = player.toLowerCase();

    let result = playRound(playerChoice, computerPlay());
    results.textContent = result;
    playerWin.textContent = `Your Score: ${playerWins}`;
    computerWin.textContent = `Computer Score: ${computerWins}`;
    draw.textContent = `Draws: ${draws}`;
}

//reset score and rounds
function reset() {
    playerWins = 0
    computerWins = 0
    draws = 0
    playerWin.textContent = `Your Score: ${playerWins}`;
    computerWin.textContent = `Computer Score: ${computerWins}`;
    draw.textContent = `Draws: ${draws}`;
}

const results = document.querySelector('p.result');
const playerWin = document.querySelector('span.playerWins');
const computerWin = document.querySelector('span.computerWins');
const draw = document.querySelector('span.draws');

const choice = document.querySelectorAll('button.choice');
choice.forEach((button) => {
    button.addEventListener('click', (e) => {
        game(e.srcElement.outerText);
    });
});

const resetButton = document.querySelector('button.reset');
resetButton.addEventListener('click', reset);