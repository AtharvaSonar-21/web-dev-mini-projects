let randomNumber = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector('#submit');
const userInput = document.querySelector('#fname');
const previous = document.querySelector('.guess');
const remaining = document.querySelector('.lastresult');
const loworhigh = document.querySelector('.loworhigh');
const startOver = document.querySelector('.guesses');
const guessForm = document.querySelector('#guessForm');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  guessForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1 || guess > 100) {
    alert('Number must be between 1 and 100');
  } else {
    prevGuess.push(guess);
    if (numGuess >= 10) {
      displayGuess(guess);
      DisplayMessage(`Game Over! The number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    DisplayMessage(`🎉 You guessed it right! The number was ${randomNumber}`);
    endGame();
  } else if (guess < randomNumber) {
    DisplayMessage('📉 Too low! Try again.');
  } else {
    DisplayMessage('📈 Too high! Try again.');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  previous.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function DisplayMessage(message) {
  loworhigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.setAttribute('disabled', '');
  submit.setAttribute('disabled', '');

  const newGameBtn = document.createElement('button');
  newGameBtn.textContent = 'Start New Game';
  newGameBtn.classList.add('new-btn');
  startOver.appendChild(newGameBtn);

  playGame = false;

  newGameBtn.addEventListener('click', function () {
    newGame();
  });
}

function newGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  prevGuess = [];
  numGuess = 1;
  previous.innerHTML = '';
  remaining.innerHTML = '10';
  loworhigh.innerHTML = '';
  userInput.removeAttribute('disabled');
  submit.removeAttribute('disabled');

  const resetBtn = document.querySelector('.new-btn');
  startOver.removeChild(resetBtn);

  playGame = true;
}
