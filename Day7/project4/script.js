let randomNumber = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let previousGuesses = [];
let numGuesses = 0;
let playGame = true;
const maxGuesses = 10;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const userGuess = parseInt(userInput.value);
    validateGuess(userGuess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1 || guess > 100) {
    alert('Please enter a number between 1 and 100');
  } else {
    previousGuesses.push(guess);
    displayGuesses(guess);
    checkGuess(guess);
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('🎉 Congratulations! You guessed the number!');
    endGame();
  } else if (numGuesses >= maxGuesses) {
    displayMessage(`❌ Game Over! The number was ${randomNumber}`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('⬇️ Your guess is too low!');
  } else {
    displayMessage('⬆️ Your guess is too high!');
  }
}

function displayGuesses(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuesses++;
  remaining.innerHTML = `${maxGuesses - numGuesses} guesses remaining`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  submit.setAttribute('disabled', '');
  playGame = false;

  p.classList.add('button');
  p.innerHTML = `<button id="newGame">Start New Game</button>`;
  startOver.appendChild(p);

  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function () {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    previousGuesses = [];
    numGuesses = 0;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${maxGuesses} guesses remaining`;
    lowOrHi.innerHTML = '';
    userInput.removeAttribute('disabled');
    submit.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
