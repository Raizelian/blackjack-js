let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false  // by default you don't have blackjack
let isAlive = true  // tracks if the player busted out
let message = ""  // keeping logs is useful!
let messageEl = document.getElementById("message-el")
sumEl = document.querySelector(".sum-el")

function startGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
  } else {
    message = "You're out of the game!"
    isAlive = false
  }

  messageEl.textContent = message
  sumEl.textContent = "Sum: " + sum
}
