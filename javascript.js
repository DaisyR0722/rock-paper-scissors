//Consists computer's random choices 
const rockButton = document.querySelector(".rock")
const paperButton = document.querySelector(".paper")
const scissorsButton = document.querySelector(".scissors")
const resultDiv = document.querySelector(".result")
const runningScoreDiv = document.querySelector(".running-score");
const humanScoreSpan = document.querySelector(".human-score");
const computerScoreSpan = document.querySelector(".computer-score");

function getComputerChoice(){
    let choices = ["rock","paper","scissors"];
    let randomChoice = Math.floor(Math.random()*choices.length);
    let computerChoice = choices[randomChoice];
    return computerChoice;
}
/*
function getHumanChoice(){  
    let humanChoice = prompt("What's your choice?", "rock", "paper", "scissors").toLowerCase();
    if(["rock","paper", "scissors"].includes(humanChoice)){
        return humanChoice;
    } 
}
*/
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
   if (humanChoice === computerChoice) {
    const paragraph = document.createElement('p');
    paragraph.innerText = "It's a tie!"
    resultDiv.appendChild(paragraph)
     } else if 
      (humanChoice === "rock" && computerChoice === "paper" 
        || humanChoice === "paper" && computerChoice === "scissors" 
        || humanChoice === "scissors" && computerChoice === "rock"){
      computerScore++
      const paragraph = document.createElement('p');
      paragraph.innerText = `You lose! ${computerChoice} beats ${humanChoice}!`
      resultDiv.appendChild(paragraph)
    } else if 
        (humanChoice === "rock" && computerChoice === "scissors" 
        || humanChoice === "paper" && computerChoice === "rock" 
        || humanChoice === "scissors" && computerChoice === "paper"){
      humanScore++
      const paragraph = document.createElement('p');
      paragraph.innerText = `You win! ${humanChoice} beats ${computerChoice}!`
      resultDiv.appendChild(paragraph)
    } 

}

const checkForWinner = (humanScore,computerScore) => {
    if(humanScore === 5){
      const heading = document.createElement('h2');
      heading.innerText = `You won ${humanScore} to ${computerScore}. Congratulations on beating the game!`
      resultDiv.appendChild(heading)
    } 
    if (computerScore === 5){
      const heading = document.createElement('h2');
      heading.innerText = `You lost ${computerScore} to ${humanScore}. Try again!`
      resultDiv.appendChild(heading)
    } 
}

const showRunningScore = (humanScore, computerScore) =>{
  humanScoreSpan.innerText = `Player Score: ${humanScore}`;
  computerScoreSpan.innerText = `Computer Score: ${computerScore}`;

}

rockButton.addEventListener("click", ()=>{
  const computerChoice = getComputerChoice();
  const humanChoice = 'rock';
  playRound(humanChoice,computerChoice);
  checkForWinner(humanScore, computerScore);
  showRunningScore(humanScore, computerScore);
})
paperButton.addEventListener("click", ()=>{
  const computerChoice = getComputerChoice();
  const humanChoice = 'paper';
  playRound(humanChoice,computerChoice);
  checkForWinner(humanScore, computerScore);
  showRunningScore(humanScore, computerScore);
})
scissorsButton.addEventListener("click", ()=>{
  const computerChoice = getComputerChoice();
  const humanChoice = 'scissors';
  playRound(humanChoice,computerChoice);
  checkForWinner(humanScore, computerScore);
  showRunningScore(humanScore, computerScore);
})



