function getComputerChoice(){
    choices = ["rock","paper","scissors"];
    randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}
console.log(getComputerChoice());
