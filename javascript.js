//Variables
let humanScore = 0;
let computerScore = 0;
const rock = document.querySelector("#rockButton");
const paper = document.querySelector("#paperButton");
const scissors = document.querySelector("#scissorsButton")

runGame();

//COMPUTER SELECTION FUNCTION
function getComputerChoice() {
    const minNum = 1;
    const maxNum = 3;
    return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum); // (random floating point number between 0 and 1) * (3 - 1 + 1) + 1) = N. N then is rounded down to the largest integer.
}


//USER SELECTION & GAME FUNCTION
function runGame() {
    rock.addEventListener("click", function() {
        let humanChoice = 1;
        let computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
    })

    paper.addEventListener("click", function(){
        let humanChoice = 2;
        let computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
    })

    scissors.addEventListener("click", function(){
        let humanChoice = 3;
        let computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
    })
}

//PLAY ROUND FUNCTION
function playRound(humanChoice, computerChoice) {
   
    //HUMAN WINS
    if ((humanChoice === 1) && (computerChoice === 3)) {
        humanScore++;
        document.querySelector("#scoreTracker").textContent = (`You won this round! Rock beats scissors. Your score: ${humanScore} || Computer's score: ${computerScore}`);
    }
    else if ((humanChoice === 2) && (computerChoice === 1)) {
        humanScore++;
        document.querySelector("#scoreTracker").textContent = (`You won this round! Paper beats rock. Your score: ${humanScore} || Computer's score: ${computerScore}`);
    }
    else if ((humanChoice === 3) && (computerChoice === 2)) {
        humanScore++;
        document.querySelector("#scoreTracker").textContent = (`You won this round! Scissors beats paper. Your score: ${humanScore} || Computer's score: ${computerScore}`);
    }

    //HUMAN AND COMPUTER TIE
    else if (humanChoice === computerChoice) {
        document.querySelector("#scoreTracker").textContent = (`It's a tie this round this round! You both chose the same! Your score: ${humanScore} || Computer's score: ${computerScore}`);
    }

    //COMPUTER WINS
    else if ((computerChoice === 1) && (humanChoice === 3)) {
        computerScore++;
        document.querySelector("#scoreTracker").textContent = (`ou lost this round. The computer chose rock. Rock beats scissors! Your score: ${humanScore} || Computer's score: ${computerScore}`);
    }
    else if ((computerChoice === 2) && (humanChoice === 1)) {
        computerScore++;
        document.querySelector("#scoreTracker").textContent = (`You lost this round. The computer chose paper. Paper beats rock! Your score: ${humanScore} || Computer's score: ${computerScore}`);
    }
    else if ((computerChoice === 3) && (humanChoice === 2)) {
        computerScore++;
        document.querySelector("#scoreTracker").textContent = (`You lost this round. The computer chose scissors. Scissors beats paper! Your score: ${humanScore} || Computer's score: ${computerScore}`);
    }

    // Winner Check

    if (humanScore == 5) {
        document.querySelector("#scoreTracker").textContent = "Congratulations! You won! 🏆";
        rock.setAttribute ("disabled", "true");
        paper.setAttribute ("disabled", "true");
        scissors.setAttribute ("disabled", "true");
    }
    else if (computerScore == 5) {
        document.querySelector("#scoreTracker").textContent = "You lost. Better luck next time! 😔🤘";
        rock.setAttribute ("disabled", "true");
        paper.setAttribute ("disabled", "true");
        scissors.setAttribute ("disabled", "true");
    }
}