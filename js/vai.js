//money

const money = document.querySelector('.atu-money')


var moneyAtual = 0
money.innerHTML = moneyAtual;



//girar

const roulete = document.querySelector('.spin')
const button = document.querySelector('.button')
const win = document.querySelector('.win')

//sons
const yeaa = document.querySelector('.yeaa')
const huuu = document.querySelector('.huuu')
const roletaSound = document.querySelector('.RoletaSound')

const vinte = document.querySelector('.vinte')
const cinquenta = document.querySelector('.cinquenta')
const sessenta = document.querySelector('.sessenta')

const cq = document.querySelector('.cq')
const men = document.querySelector('.men')

var IN = 1

vinte.addEventListener("click", function(event){
    IN = 1
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
    IN = 3
    vinte.classList.remove('em')
    cinquenta.classList.remove('em')
    sessenta.classList.add('em')

    men.classList.add('mena')
    cq.classList.add('cqa')
})

let max = 6
let min = 1

button.addEventListener("click", function(event){
    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    if(moneyAtual > 0){
        if (numeroAleatorio == 1){
            roulete.classList.add('um')
            win.innerHTML="Win";
            setTimeout(winm,9300)
        }else if (numeroAleatorio ==2){
            roulete.classList.add('dois')
            if(IN >= 2){
                win.innerHTML="Win";
                setTimeout(winm,9300)
            }else{
                win.innerHTML="Lose";
                setTimeout(losem,9300)
            }
        }else if (numeroAleatorio == 3){
            roulete.classList.add('tres')
            win.innerHTML="Lose";
            setTimeout(losem,9300)
        }else if (numeroAleatorio == 4){
            roulete.classList.add('quatro')
            if(IN == 3){
                win.innerHTML="Win";
                setTimeout(winm,9300)
            }else{
                win.innerHTML="Lose";
                setTimeout(losem,9300)
            }

        }else if (numeroAleatorio == 5){
            roulete.classList.add('cinco')
            win.innerHTML="Win";
            setTimeout(winm,9300)
        }else if (numeroAleatorio == 6){
            roulete.classList.add('seis')
            win.innerHTML="Lose";
            setTimeout(losem,9300)
        }    

    roletaSound.play()

    setTimeout(resetspin, 12000);
    }                         
} )

function winm(){
    win.classList.add("winm")
    win.classList.remove("winn")
    yeaa.play()
    if(IN == 1){
        moneyAtual += 15
        money.innerHTML = moneyAtual;
    }else if(IN == 2){
        moneyAtual += 7.50
        money.innerHTML = moneyAtual;
    }else{
        moneyAtual += 5
        money.innerHTML = moneyAtual;
    }

    console.log(IN)

}

function losem(){
    win.classList.add("winm")
    win.classList.remove("winn")
    huuu.play()
    if(IN == 1){
        moneyAtual -= 15
        money.innerHTML = moneyAtual;
    }else if(IN == 2){
        moneyAtual -= 7.50
        money.innerHTML = moneyAtual;
    }else{
        moneyAtual -= 5
        money.innerHTML = moneyAtual;
    }

    console.log(IN)
}

function resetspin(){
    win.classList.remove("winm")
    win.classList.add("winn")
    roulete.classList.remove('um')
    roulete.classList.remove('dois')
    roulete.classList.remove('tres')
    roulete.classList.remove('quatro')
    roulete.classList.remove('cinco')
    roulete.classList.remove('seis')
}
