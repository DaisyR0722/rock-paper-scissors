//Consists computer's random choices 
function getComputerChoice(){
   const choices = ["rock","paper","scissors"];
   const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

//Consisrs of human options to write
function getHumanChoice(){
    const options = prompt("Choose your weapon","rock","paper","scissors").toLowerCase();
    return options;
}

//Plays one round with player choices
function playRound(humanSelection, computerSelection){ 
    if (humanSelection === computerSelection) {
      return "It's a tie!";
     } else if (humanSelection === "rock" && computerSelection === "paper"){
      return "You lose!Paper beats rock!";
    } else if (humanSelection === "paper" && computerSelection === "scissors"){
      return "You lose! Scissors beats paper!";
     } else if (humanSelection === "scissors" && computerSelection === "rock"){
      return "You lose! Rock beats scissors!";
    } else if (humanSelection === "rock" && computerSelection === "scissors"){
      return "You win! Rock beats scissors!";
     } else if  (humanSelection === "paper" && computerSelection === "rock"){
      return "You win! Paper beats rock!";
     } else if (humanSelection === "scissors" && computerSelection === "paper"){
      return "You win! Scissors beats paper!";
    }
  } 
const humanSelection = getHumanChoice();
console.log(humanSelection);
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(humanSelection,computerSelection));

//Plays games and tracks score
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    //Loops game five times
    for (i = 0; i < 5; i++){
        const result = playRound(getHumanChoice(), getComputerChoice());
        console.log(result);
        if (result.includes("win")) {
            humanScore++;
            console.log(`computer: ${computerScore} | human: ${humanScore}`);
          } else if (result.includes("lose")) {
            computerScore++;
            console.log(`computer: ${computerScore} | human: ${humanScore}`);
          }
}
    //Determines winner with score
    console.log("Final results: Human " + humanScore + " Computer: " + computerScore);
        if (humanScore > computerScore){
            console.log("You win the game!");
        } else if (humanScore < computerScore){
            console.log("You lose the game!");
        } else {
            console.log("The game is a tie!");
        }   
}

playGame();