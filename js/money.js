//money



const moneyadd = document.querySelector('.money')
const addmoney = document.querySelector('.add-money')
const vinteAdd = document.querySelector('.vt')
const cinquentaAdd = document.querySelector('.cqu')

var moneyAtual = 0
money.innerHTML = moneyAtual;


moneyadd.addEventListener("click", function(event){
    console.log("oi")
    addmoney.classList.toggle('add-money-on')
    console.log("io")
})

vinteAdd.addEventListener("click", function(event){
    moneyAtual += 25
    money.innerHTML = moneyAtual;
})

cinquentaAdd.addEventListener("click", function(event){
    moneyAtual += 50
    money.innerHTML = moneyAtual;
})