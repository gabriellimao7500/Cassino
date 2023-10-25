

const money = document.querySelector('.atu-money')
const moneyR = document.querySelector('.dinheiro-retirada')
const Retirar = document.querySelector('.Retirar')


var moneyAtual = parseFloat(localStorage.getItem("money"))
money.innerHTML = moneyAtual;
var dinheiroRecebimento = 0

console.log(localStorage.getItem("money"))

const vinte = document.querySelector('.vinte')
const cinquenta = document.querySelector('.cinquenta')
const sessenta = document.querySelector('.sessenta')

var IN = 3



vinte.addEventListener("click", function(event){
    IN = 3
    vinte.classList.add('em')
    cinquenta.classList.remove('em')
    sessenta.classList.remove('em')

    men.classList.remove('mena')
    cq.classList.remove('cqa')
})

cinquenta.addEventListener("click", function(event){
    IN = 2
    vinte.classList.remove('em')
    cinquenta.classList.add('em')
    sessenta.classList.remove('em')

    men.classList.remove('mena')
    cq.classList.add('cqa')
})

sessenta.addEventListener("click", function(event){
    IN = 1
    vinte.classList.remove('em')
    cinquenta.classList.remove('em')
    sessenta.classList.add('em')

    men.classList.add('mena')
    cq.classList.add('cqa')
})

let max = 25
let min = 1

let BombaUm = Math.floor(Math.random() * (max - min + 1)) + min;

let BombaDois = Math.floor(Math.random() * (max - min + 1)) + min;

let BombaTres = Math.floor(Math.random() * (max - min + 1)) + min;

const container = document.querySelector(".container-mines")

const CreateCard = () =>{
    for(let i = 25; i > 0; i--){
        
        if(BombaUm == 1){
            const carta = document.createElement('div')
            carta.className = 'bomba'
            container.appendChild(carta)
            BombaUm = 25
            
        }else if(BombaDois == 1){
            const carta = document.createElement('div')
            carta.className = 'bomba'
            container.appendChild(carta)
            BombaDois = 25
        }else if(BombaTres == 1){
            const carta = document.createElement('div')
            carta.className = 'bomba'
            container.appendChild(carta)
            BombaTres = 25
            
        }else{
            const carta = document.createElement('div')
            carta.className = 'carta'
            container.appendChild(carta)
            BombaUm -= 1
            BombaDois -= 1
            BombaTres -= 1
        }

    }

    const cards = container.querySelectorAll(".carta");
    const bomb = container.querySelectorAll(".bomba");
    const BombSound = document.querySelector(".bomba-sound")
    const DiamontSound = document.querySelector(".diamante-sound")

    function addDiamanteClass(event) {
    if(moneyAtual > 0){
        event.target.classList.add("diamante");
        setTimeout(removeCard,200)
        function removeCard(){
        event.target.classList.remove("carta");
        }       
    }
    }
    
    cards.forEach((carta) => {

    carta.addEventListener("click", addDiamanteClass);
    carta.addEventListener("click", () => {
        if(moneyAtual > 0){
            if(carta.classList.contains("carta") == true){
                DiamontSound.play()
                if(IN == 1){
                    dinheiroRecebimento += 0.25
                    moneyR.innerHTML = dinheiroRecebimento;
                }else if(IN == 2){
                    dinheiroRecebimento += 1.00
                    moneyR.innerHTML = dinheiroRecebimento;
                }else if(IN == 3){
                    dinheiroRecebimento += 2.00
                    moneyR.innerHTML = dinheiroRecebimento;
                }
            }
        }
    });
    });

    bomb.forEach((bomb) => {
        bomb.addEventListener("click",explosao)
        bomb.addEventListener("click",() => {
            if(moneyAtual > 0){
                BombSound.play()
            if(IN == 1){
                moneyAtual -= 10
                localStorage.setItem("money",moneyAtual)
                money.innerHTML = moneyAtual;
            }else if(IN == 2){
                moneyAtual -= 20
                localStorage.setItem("money",moneyAtual)
                money.innerHTML = moneyAtual;
            }else{
                moneyAtual -= 40
                localStorage.setItem("money",moneyAtual)
                money.innerHTML = moneyAtual;
            }
            setTimeout(reload,1000)
            function reload() {
                location.reload()
            }

            }
            
        })
    })
    function explosao(){
        if(moneyAtual > 0){
            cards.forEach((carta) => {
                carta.classList.add('diamante');
            });
            bomb.forEach((bomba) => {
                bomba.classList.add('explode');
            }); 
        }

    }

    
    Retirar.addEventListener("click", function(event){
        moneyAtual += dinheiroRecebimento
        localStorage.setItem("money",moneyAtual)
        money.innerHTML = moneyAtual;
        setTimeout(reload,10)
        function reload() {
            location.reload()
        }
    })

}
CreateCard()


