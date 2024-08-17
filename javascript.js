function getComputerChoice(){
   let choices = ["rock","paper","scissors"];
   let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}
console.log(getComputerChoice());

function getHumanChoice(){
   let options = prompt("Choose your weapon","rock","paper","scissors");
    return options;
}
console.log(getHumanChoice());

