let randomNumber = parseInt(Math.random()*100 + 1)
const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const guesses = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const StartOver = document.querySelector('.resultParas')
const p = document.createElement('p')
let prevGuess = []
let attemps = 1
let playGame = true
console.log(randomNumber)
if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value)
    validateGuess(guess)
  })
}
function validateGuess (guess){
    if(isNaN(guess)){
      alert('Please enter a valid number')
    }
    else if(guess < 1){
      alert('Please enter a number more than 1')
    }
    else if(guess > 100){
      alert('Please enter a number less than 100')
    }
    else {
      prevGuess.push(guess)
      if(attemps === 11){
        displayGuess(guess)
        displayMessage(`Game Over : Number was ${randomNumber}`)
        endGame()
      }
      else{
        displayGuess(guess)
        checkGuess(guess)
      }
    }
}
function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You guessed it right`)
    endGame()
  }
  else if(guess < randomNumber){
    displayMessage(`Number is TOOO low`)
  }
  else if(guess > randomNumber){
    displayMessage('Number is TOO high')
  }

}

//
function displayGuess (guess){
  userInput.value = ''
  guesses.innerHTML += `${guess} `
  attemps++
  remaining.innerHTML = `${11-attemps}`
}

// 
function displayMessage(message){
  lowOrHi.innerHTML = `<h3>${message}</h3>`
}
function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`
  StartOver.appendChild(p)
  playGame = false
  startGame()
}
function startGame(){
 const newGameButton =  document.querySelector('#newGame')
 newGameButton.addEventListener('click',function(e){
  randomNumber = parseInt(Math.random()*100 + 1)
  console.log(randomNumber)
  prevGuess = []
  attemps = 1
  guesses.innerHTML = ''
  remaining.innerHTML = `${11-attemps}`
  userInput.removeAttribute('disabled')
  StartOver.removeChild(p)
   playGame = true
 })
}


