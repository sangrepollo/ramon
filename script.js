// Generar un número aleatorio entre 1 y 100
let randomNumber;
let attempts = 0;

function startGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById('message').textContent = '';
  document.getElementById('guess').value = '';
  document.getElementById('guess').removeAttribute('disabled');
}

function checkGuess() {
  const guess = parseInt(document.getElementById('guess').value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    document.getElementById('message').textContent = 'Por favor, introduce un número válido entre 1 y 100.';
    return;
  }

  attempts++;

  if (guess === randomNumber) {
    document.getElementById('message').textContent = `¡Felicidades! Adivinaste el número ${randomNumber} en ${attempts} intentos.`;
    document.getElementById('message').style.color = 'green';
    document.getElementById('guess').setAttribute('disabled', 'true');
  } else if (guess < randomNumber) {
    document.getElementById('message').textContent = 'El número es mayor. Intenta de nuevo.';
    document.getElementById('message').style.color = 'red';
  } else {
    document.getElementById('message').textContent = 'El número es menor. Intenta de nuevo.';
    document.getElementById('message').style.color = 'red';
  }
}

function resetGame() {
  startGame();
}
