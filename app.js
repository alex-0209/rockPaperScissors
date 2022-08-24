let userScore = 0;
let computerScore = 0;
let userName = prompt('Hello, write Your name', ['user']);

// prompt('Hello, write Your name')

const userScore_span = document.querySelector('#user-score');
const computerScore_span = document.querySelector('#comp-score');

const scoreBoard_div = document.querySelector('#score-board');
const result_div = document.querySelector('#result > p');

const rock_div = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

function getComputerChoices() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${userChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}. ${userName} YOU win`;
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(
    () => document.getElementById(userChoice).classList.remove('green-glow'),
    300
  );
}

function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${userChoice.toUpperCase()} loses to  ${computerChoice.toUpperCase()}. ${userName} YOU lost...`;
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(
    () => document.getElementById(userChoice).classList.remove('red-glow'),
    300
  );
}

function draw(userChoice, computerChoice) {
  result_div.innerHTML = `${userChoice.toUpperCase()} equels  ${computerChoice.toUpperCase()}. Is's draw...`;
  document.getElementById(userChoice).classList.add('gray-glow');
  setTimeout(
    () => document.getElementById(userChoice).classList.remove('gray-glow'),
    300
  );
}

function game(userChoice) {
  const computerChoice = getComputerChoices();
  switch (userChoice + computerChoice) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      win(userChoice, computerChoice);
      break;
    case 'paperscissors':
    case 'scissorsrock':
    case 'rockpaper':
      lose(userChoice, computerChoice);
      break;
    case 'paperpaper':
    case 'rockrock':
    case 'scissorsscissors':
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', () => {
    game('rock');
  });
  paper.addEventListener('click', () => {
    game('paper');
  });
  scissors.addEventListener('click', () => {
    game('scissors');
  });
}

main();
