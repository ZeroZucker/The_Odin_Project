
const actions = ["rock", "paper", "scissors"];

function getComputerChoice() {
    // should randomly return rock, paper or scissors
  //
    // create a list of the options
  // randomly choose one of them (likely Math.random)
  //
  let randomChoice = Math.floor(Math.random() * (actions.length))
  return actions[randomChoice]
}

console.log(getComputerChoice())
