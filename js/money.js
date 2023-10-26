//money



const moneyadd = document.querySelector('.money')
const addmoney = document.querySelector('.add-money')
const vinteAdd = document.querySelector('.vt')
const cinquentaAdd = document.querySelector('.cqu')

var moneyAtual = parseFloat(localStorage.getItem("money"))
money.innerHTML = moneyAtual;

//localStorage.setItem("money",0)


if(isNaN(moneyAtual) || moneyAtual == null){
    localStorage.getItem("money", 0)
    var moneyAtual = 0
    money.innerHTML = moneyAtual;
}

moneyadd.addEventListener("click", function(event){
    addmoney.classList.toggle('add-money-on')
})

vinteAdd.addEventListener("click", function(event){
    if(moneyAtual < 50){
        moneyAtual += 25
        localStorage.setItem("money",moneyAtual)
        money.innerHTML = moneyAtual;
    }

})

cinquentaAdd.addEventListener("click", function(event){
    if(moneyAtual < 100){
        moneyAtual += 50
        localStorage.setItem("money",moneyAtual)
        money.innerHTML = moneyAtual;
    }
})