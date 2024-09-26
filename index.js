let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard] // array - ordered list of cards
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = "";
const btn = document.querySelector("#btn");
const reset = document.querySelector("#newgame");
const cardEl = document.querySelector("#newcard")
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

function startGame() {
    renderGame();
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
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
}

function newCard() {
    console.log("Drawing a new card from the deck!")
    let card = 7;
    sum += card;
    startGame();
}

function newGame() {
    messageEl.textContent = "Want to play a round?";
    sumEl.textContent = "Sum: ";
    cardsEl.textContent = "Cards: ";
}

btn.addEventListener("click", startGame)
cardEl.addEventListener("click", newCard)
reset.addEventListener("click", newGame)

