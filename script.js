const option = ["rock", "paper", "scissors"];
let allWinner;
let totalPlayerPoints = 0;
let totalComputerPoints = 0;

// main function
function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    const eachRoundWinner = checkEachRoundWinner(player, computer);
    return eachRoundWinner;
}

function game() {
    totalComputerPoints = 0;
    totalPlayerPoints = 0;
    for(let i = 0; i < 5; i++) {
        const playerSelection = prompt("What is your choice?");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    const winner = checkWinner();
    console.log(winner);
}

game();







// helper functions
function getComputerChoice() {
    let randomNumber = getrandomNumber();
    return option[randomNumber];
}

function getrandomNumber() {
    let randomNumber = Math.floor( Math.random() * 3 );
    return randomNumber;
}

function checkEachRoundWinner(player, computer) {
    if (player === "rock" && computer === "scissors"){
        totalPlayerPoints++;
        return `You Won! ${player} beats ${computer}`;
    } else if (player === "rock" && computer === "paper") {
        totalComputerPoints++;
        return `You Lost! ${computer} beats ${player}`;
    } else if (player === "rock" && computer === "rock") {
        return `It's a tie!`
    }

    if (player === "paper" && computer === "rock"){
        totalPlayerPoints++;
        return `You Won! ${player} beats ${computer}`;
    } else if (player === "paper" && computer === "scissors") {
        totalComputerPoints++;
        return `You Lost! ${computer} beats ${player}`;
    } else if (player === "paper" && computer === "paper") {
        return `It's a tie!`
    }

    if (player === "scissors" && computer === "paper"){
        totalPlayerPoints++
        return `You Won! ${player} beats ${computer}`;
    } else if (player === "scissors" && computer === "rock") {
        totalComputerPoints++;
        return `You Lost! ${computer} beats ${player}`;
    } else if (player === "scissors" && computer === "scissors") {
        return `It's a tie!`
    }
}

function checkWinner() {
    if (totalComputerPoints > totalPlayerPoints){
        return `YOU LOST THE GAME.`
    } else if (totalPlayerPoints > totalComputerPoints){
        return `YOU HAVE WON IT ALL!`
    } else {
        return `IT WAS A TIE BETWEEN YOU AND COMPUTER!`
    }
}
