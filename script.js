const option = ["rock", "paper", "scissors"];
let allWinner;
let round = 1;
let totalPlayerPoints = 0;
let totalComputerPoints = 0;


// getting all the buttons
const paper = document.querySelector("#paper");
const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const restartBtn = document.querySelector("#restart");

// listening for a event
// here in the event listener it skips the
// funtionc if the round is more than 5
paper.addEventListener('click', () => {
    if (round <= 5) {
        game("paper"); // passes paper to the game function 
        round++;
    } else {
        return;
    }
});
    
rock.addEventListener('click', () => {
    if (round <= 5) {
        game("rock"); // passes rock
        round++;
    } else {
        return;
    }
});
    
scissors.addEventListener('click', () => {
    if (round <= 5) {
        game("scissors"); // passes scissors
        round++;
    } else {
        return;
    }
});

restartBtn.addEventListener("click", function () {
    const logRound = document.querySelector(".log-round");
    round = 1;
    totalComputerPoints = 0;
    totalPlayerPoints = 0;
    logRound.innerHTML = " "; 
});

// plays a round between player and computer
function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase(); //converting the player choice to lowerCase
    let computer = computerSelection.toLowerCase(); // converting the computer choice to lowerCase
    const eachRoundWinner = checkEachRoundWinner(player, computer); // checks who won
    return eachRoundWinner; // returning the winner of that round
}

// the main game function
function game(playerSelection) {
    const computerSelection = getComputerChoice();
    const roundWinner = playRound(playerSelection, computerSelection);
    showWinner(roundWinner, playerSelection, computerSelection);

    if (round === 5){
        const winner= checkWinner(); // after five rounds winner is checked
        showGameWinner(winner);
    }
}









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
        return `WINNER COMPUTER!`
    } else if (totalPlayerPoints > totalComputerPoints){
        return `WINNER PLAYER!!`
    } else {
        return `IT WAS A TIE BETWEEN YOU AND COMPUTER!`
    }
}

function showWinner(roundWinner, playerSelection, computerSelection) {
    // creating the necessary elements to be shown in the log-round div
    const logRound = document.querySelector(".log-round");
    const div = document.createElement("div");
    const p = document.createElement("p");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");


    // adding the text in the paragraph to show who won each round
    p1.textContent = playerSelection;
    p.textContent = roundWinner;
    p2.textContent = computerSelection;


    // adding classes and appending the elements
    p1.classList.add("outcome");
    p.classList.add("result");
    p2.classList.add("outcome");
    div.append(p1, p, p2);
    div.classList.add("each-round");
    logRound.appendChild(div);
}

function showGameWinner(winner) {
    // creating the necessary elements to be shown in the log-round div
    const logRound = document.querySelector(".log-round");
    const div = document.createElement("div");
    const p = document.createElement("p");

    p.textContent = winner;

    p.classList.add("outcome");
    div.appendChild(p);
    div.classList.add("game-winner");
    logRound.appendChild(div);
}
