const roulete = document.querySelector('.spin')
const button = document.querySelector('.btn')
const win = document.querySelector('.win')
const yeaa = document.querySelector('.yeaa')
const huuu = document.querySelector('.huuu')
const roletaSound = document.querySelector('.roleta')
let max = 6
let min = 1

button.addEventListener("click", function(event){
    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(numeroAleatorio);    
    if (numeroAleatorio == 1){
        roulete.classList.add('um')
        win.innerHTML="Win";
        setTimeout(winm,5300)
    }else if (numeroAleatorio ==2){
        roulete.classList.add('dois')
        win.innerHTML="Lose";
        setTimeout(losem,5300)
    }else if (numeroAleatorio == 3){
        roulete.classList.add('tres')
        win.innerHTML="Lose";
        setTimeout(losem,5300)
    }else if (numeroAleatorio == 4){
        roulete.classList.add('quatro')
        win.innerHTML="Lose";
        setTimeout(losem,5300)
    }else if (numeroAleatorio == 5){
        roulete.classList.add('cinco')
        win.innerHTML="Win";
        setTimeout(winm,5300)
    }else if (numeroAleatorio == 6){
        roulete.classList.add('seis')
        win.innerHTML="Lose";
        setTimeout(losem,5300)
    }

    roletaSound.play()

    setTimeout(resetspin, 6000);
                                   
} )

function winm(){
    win.classList.add("winm")
    win.classList.remove("winn")
    yeaa.play()
}

function losem(){
    win.classList.add("winm")
    win.classList.remove("winn")
    huuu.play()
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
    console.log("mano")
}
