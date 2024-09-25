let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = "";
const btn = document.querySelector("#btn");
let messageEl = document.querySelector("#message-el")

btn.addEventListener("click", function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card? 😀";
    } else if (sum === 21) {
        message = "Woohoo! You've got Blackjack! 😍";
        hasBlackJack = true
    } else  {
        message = "You're out of the game! 🥸";
        isAlive = false
    }
    messageEl.textContent = message;
})

