const actions = ["rock", "paper", "scissors"];
const conclusions = {"rock": "scissors", "paper": "rock", "scissors": "paper"}

let humanScore = 0, computerScore = 0;
function getComputerChoice() {
    // should randomly return rock, paper or scissors
  //
    // create a list of the options
  // randomly choose one of them (likely Math.random)
  //
  let randomChoice = Math.floor(Math.random() * (actions.length))
  return actions[randomChoice]
}

function getHumanChoice() {
  let humanChoice = prompt("rock, paper, scissors: ");
  return humanChoice.toLowerCase()
}

function playRound(humanChoice, computerChoice) {
  // check if conclusion[humanchoie
  if (computerChoice === conclusions[humanChoice]) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    humanScore += 1;
  }
   if (humanChoice === conclusions[computerChoice]) {
    console.log(`You lose! ${humanChoice} loses to ${computerChoice}`) 
    computerScore += 1
  }

  else {
    console.log("tie" + humanChoice + computerChoice);
  }
}

function playGame(){
  for (let counter = 0; counter < 5; counter++) {
    playRound(getHumanChoice(), getComputerChoice())
    console.log(`Your score: ${humanScore} \n Computer score: ${computerScore}`)
  }}

playGame()
