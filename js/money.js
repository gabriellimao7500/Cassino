//money



const moneyadd = document.querySelector('.money')
const addmoney = document.querySelector('.add-money')
const vinteAdd = document.querySelector('.vt')
const cinquentaAdd = document.querySelector('.cqu')

var moneyAtual = parseFloat(localStorage.getItem("money"))
money.innerHTML = moneyAtual;

//localStorage.setItem("money",0)


moneyadd.addEventListener("click", function(event){
    addmoney.classList.toggle('add-money-on')
})

vinteAdd.addEventListener("click", function(event){
    moneyAtual += 25
    localStorage.setItem("money",moneyAtual)
    money.innerHTML = moneyAtual;
})

cinquentaAdd.addEventListener("click", function(event){
    moneyAtual += 50
    localStorage.setItem("money",moneyAtual)
    money.innerHTML = moneyAtual;
})