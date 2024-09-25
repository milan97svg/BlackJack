let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = "";
const btn = document.querySelector("#btn");
const reset = document.querySelector("#reset");
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el");

btn.addEventListener("click", function startGame() {
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true
    } else  {
        message = "You're out of the game!";
        isAlive = false
    }
    messageEl.textContent = message;
})

reset.addEventListener("click", function resetGame() {
    messageEl.textContent = "Want to play a round?";
    sumEl.textContent = "Sum: ";
})

