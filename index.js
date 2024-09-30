let player = {
    name: "Milan",
    chips: 200
}
let cards = [] // array - ordered list of cards
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = "";
const btn = document.querySelector("#btn");
const reset = document.querySelector("#newgame");
const cardEl = document.querySelector("#newcard")
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

let playerEl = document.querySelector("#player-el");
playerEl.textContent = player.name + ": $" + player.chips;


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1) {
        return 11
    }
    else if (randomNumber > 10) {
        return 10
    }
    else {
        return randomNumber;
    }
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";
    for (i = 0 ; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }

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

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        console.log("Drawing a new card from the deck!")
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}


btn.addEventListener("click", startGame)
cardEl.addEventListener("click", newCard)




