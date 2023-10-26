
let totalDealer = 0;
let totalYour = 0;

let dealerAs = 0;
let yourAs = 0;

let hidden;
let deck;

let canHit = true;

//localStorage.setItem("money",0)

const money = document.querySelector('.atu-money')

var moneyAtual = parseFloat(localStorage.getItem("money"))
money.innerHTML = moneyAtual;



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
    if(moneyAtual > 0){
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
    }else{
        window.alert("VOCÊ ETÁ SEM SALDO, CLIQUE NO SALDO E EM ADICIONAR")
    }
    
}

function stay() {
    if(moneyAtual > 0){
        totalDealer = reduceAs(totalDealer, dealerAs);
        totalYour = reduceAs(totalYour, yourAs);
    
        canHit = false;
        document.getElementById("front").src = "../imgs/cards/" + hidden + ".png";
    
        
        let winouLoser = 0;
        let message = "";
        if (totalYour > 21) {
            message = "You Lose!";
            winouLoser = 0; 
            setTimeout(ganharOuPerder,100)
            setTimeout(reload,1000)
            function reload() {
                location.reload()
            }
        }
        else if (totalDealer > 21) {
            message = "You win!";
            winouLoser = 1;
            setTimeout(ganharOuPerder,100)
            setTimeout(reload,1000)
            function reload() {
                location.reload()
            }
        }
        
        else if (totalYour == totalDealer) {
            message = "Tie!";
            winouLoser = 3;
            setTimeout(ganharOuPerder,100)
            setTimeout(reload,1000)
            function reload() {
                location.reload()
            }
        }
        else if (totalYour > totalDealer) {
            message = "You Win!";
            winouLoser = 1;
        
            setTimeout(ganharOuPerder,100)
            setTimeout(reload,1000)
            function reload() {
                location.reload()
            }
        }
        else if (totalYour < totalDealer) {
            message = "You Lose!";
            winouLoser = 0;
            setTimeout(ganharOuPerder,100)
            setTimeout(reload,1000)
            function reload() {
                location.reload()
            }
        }
        function ganharOuPerder(){
    
            if (winouLoser == 0){
                if(IN == 1){
                    moneyAtual -= 15
                    localStorage.setItem("money", moneyAtual)
                    money.innerHTML = moneyAtual;
                }else if(IN == 2){
                    moneyAtual -= 7.5
                    localStorage.setItem("money", moneyAtual)
                    money.innerHTML = moneyAtual;
                }else if(IN == 3){
                    moneyAtual -= 5
                    localStorage.setItem("money", moneyAtual)
                    money.innerHTML = moneyAtual;
                }
        
            }else if (winouLoser == 1){
                if(IN == 1){
                    moneyAtual += 15
                    localStorage.setItem("money", moneyAtual)
                    money.innerHTML = moneyAtual;
                }else if(IN == 2){
                    moneyAtual += 7.5
                    localStorage.setItem("money", moneyAtual)
                    money.innerHTML = moneyAtual;
                }else if(IN == 3){
                    moneyAtual += 5
                    localStorage.setItem("money", moneyAtual)
                    money.innerHTML = moneyAtual;
                }
            }else if(winouLoser == 3){
                moneyAtual += 0;
                localStorage.setItem("money", moneyAtual)
                money.innerHTML = moneyAtual
            }
        }
        
    
        document.getElementById("totalDealer").innerText = totalDealer;
        document.getElementById("totalYour").innerText = totalYour;
        document.getElementById("results").innerText = message;
        document.getElementById("front").classList.add('rotacao-cards');
    }else{
        window.alert("VOCÊ ETÁ SEM SALDO, CLIQUE NO SALDO E EM ADICIONAR")
    }


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

//money

const quinze = document.querySelector('.quinze')
const seteEcinquenta = document.querySelector('.seteEcinquenta')
const cinco = document.querySelector('.cincoR')

var IN = 1

quinze.addEventListener("click", function(event){
    IN = 1
    quinze.classList.add('em')
    seteEcinquenta.classList.remove('em')
    cinco.classList.remove('em')

})

seteEcinquenta.addEventListener("click", function(event){
    IN = 2
    quinze.classList.remove('em')
    seteEcinquenta.classList.add('em')
    cinco.classList.remove('em')

})

cinco.addEventListener("click", function(event){
    IN = 3
    quinze.classList.remove('em')
    seteEcinquenta.classList.remove('em')
    cinco.classList.add('em')

   
})


