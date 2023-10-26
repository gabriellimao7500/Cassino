
let totalDealer = 0;
let totalYour = 0;

let dealerAs = 0;
let yourAs = 0;

let hidden;
let deck;

let canHit = true;




window.onload = function() {
    buildDeck();
    shuffleDeck();
    startGame();
}

function buildDeck() {
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let types = ["C", "D", "H", "S"];
    deck = [];

    for (let i = 0 ; i < types.length; i++) {
        for (let j = 0 ; j < values.length ; j++) {
            deck.push(values[j] + "-" + types[i]);
        }
    }

    //console.log(deck);

}

function shuffleDeck() {
    for (let i = 0 ; i < deck.length ; i++) {
        let j = Math.floor(Math.random() * deck.length);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    console.log(deck);

}

function startGame() {
    hidden = deck.pop();
    totalDealer += getValue(hidden);
    dealerAs += checkAs(hidden);

    while (totalDealer < 17) {

        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "../imgs/cards/" + card + ".png";
        totalDealer += getValue(card);
        dealerAs += checkAs(card);
        document.getElementById("dealer-cards").append(cardImg);
    }
    console.log(totalDealer);

    for (let i = 0 ; i < 2 ; i++) {

        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "../imgs/cards/" + card + ".png";
        totalYour += getValue(card);
        yourAs += checkAs(card);
        document.getElementById("your-cards").append(cardImg);
    }

    console.log(totalYour);
    document.getElementById("hit").addEventListener("click", hit);
    document.getElementById("stay").addEventListener("click", stay)
}

function hit() {
    if (!canHit) {
        return;
    }
    let cardImg = document.createElement("img");
    let card = deck.pop();
    cardImg.src = "../imgs/cards/" + card + ".png";
    totalYour += getValue(card);
    yourAs += checkAs(card);
    document.getElementById("your-cards").append(cardImg);

    if (reduceAs(totalYour, yourAs) > 21) {
        canHit = false;

    }
}

function stay() {
    totalDealer = reduceAs(totalDealer, dealerAs);
    totalYour = reduceAs(totalYour, yourAs);

    canHit = false;
    document.getElementById("front").src = "../imgs/cards/" + hidden + ".png";

    
    let winLoser = 0;
    let message = "";
    if (totalYour > 21) {
        message = "You Lose!";
        winLoser = 3;
    }
    else if (totalDealer > 21) {
        message = "You win!";
        winLoser = 2;
    }
    
    else if (totalYour == totalDealer) {
        message = "Tie!";
        winLoser = 0;
    }
    else if (totalYour > totalDealer) {
        message = "You Win!";
        winLoser = 2;
    }
    else if (totalYour < totalDealer) {
        message = "You Lose!";
        winLoser = 3;
    }

    document.getElementById("totalDealer").innerText = totalDealer;
    document.getElementById("totalYour").innerText = totalYour;
    document.getElementById("results").innerText = message;
    document.getElementById("front").classList.add('rotacao-cards');

}

function getValue(card) {
    let data = card.split("-");
    let value = data[0];

    if (isNaN(value)) {
        if (value == "A") {
            return 11;
        }
        return 10;
    }

    return parseInt(value);

}

function checkAs(card) {
    if (card[0] == "A") {
        return 1;
    }
    return 0;
}

function reduceAs(totalPlayer, playerAs) {
    while (totalPlayer > 21 && playerAs > 0) {
        totalPlayer -= 10;
        playerAs -= 1;
    } 
    return totalPlayer;
}

const bntReload = document.getElementById("reload")
bntReload.addEventListener("click", () => {
    window.location.reload(1);
});

//money

const money = document.querySelector('.atu-money')

var moneyAtual = localStorage.getItem("money")
money.innerHTML = moneyAtual;

const quinze = document.querySelector('.quinze')
const seteEcinquenta = document.querySelector('.seteEcinquenta')
const cinco = document.querySelector('.cincoR')

var IN = 1

quinze.addEventListener("click", function(event){
    IN = 15
    quinze.classList.add('em')
    seteEcinquenta.classList.remove('em')
    cinco.classList.remove('em')

})

seteEcinquenta.addEventListener("click", function(event){
    IN = 7.5
    quinze.classList.remove('em')
    seteEcinquenta.classList.add('em')
    cinco.classList.remove('em')

})

cinco.addEventListener("click", function(event){
    IN = 5
    quinze.classList.remove('em')
    seteEcinquenta.classList.remove('em')
    cinco.classList.add('em')

   
})

function ganharOuPerder(){

    if (winLoser = 3){
        if(IN == 15){
            moneyAtual -= IN
            localStorage.getItem("money", moneyAtual)
            money.innerHTML = moneyAtual;
        }else if(IN == 7.5){
            moneyAtual -= IN
            localStorage.getItem("money", moneyAtual)
            money.innerHTML = moneyAtual;
        }else{
            moneyAtual -= IN
            localStorage.getItem("money", moneyAtual)
            money.innerHTML = moneyAtual;
        }

    }else if (winLoser = 2){
        if(IN == 15){
            moneyAtual += IN
            localStorage.getItem("money", moneyAtual)
            money.innerHTML = moneyAtual;
        }else if(IN == 7.5){
            moneyAtual += IN
            localStorage.getItem("money", moneyAtual)
            money.innerHTML = moneyAtual;
        }else{
            moneyAtual += IN
            localStorage.getItem("money", moneyAtual)
            money.innerHTML = moneyAtual;
        }
    }else {
        moneyAtual += 0;
        localStorage.setItem("money", moneyAtual)
        money.innerHTML = moneyAtual
    }

    console.log(IN);

}

