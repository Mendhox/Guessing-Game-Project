// Variables
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

// Events
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

// Callback functions
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    if (xAttempts == 1) {
      screen2.querySelector(
        'h2'
      ).innerText = `You guessed the number in ${xAttempts} attempt.`
    } else {
      screen2.querySelector(
        'h2'
      ).innerText = `You guessed the number in ${xAttempts} attempts.`
    }
  }

  inputNumber.value = ''

  xAttempts++
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
