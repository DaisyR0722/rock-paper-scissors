function getComputerChoice(){
   let choices = ["rock","paper","scissors"];
   let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}
console.log(getComputerChoice());

function getHumanChoice(){
   let options = prompt("Choose your weapon","rock","paper","scissors").toLowerCase();
    return options;
}
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
  if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore++
        return "You lose!Paper beats rock!";
    }
}

console.log(playRound());
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);