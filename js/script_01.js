// console.log("Hello World");

// Dados de teste
const dados = {
    saldo: 3000,
    limite: 10000,
    fatura: 543
}

// String que substitui (oculta) os valores reais
const oculto = "****";

//  Visualizar saldo de conta
const btSaldo = document.getElementById("saldo-bt");
const saldoDisplay = document.getElementById("saldo-display");

let saldoVisivel = false;

function atualizaDisplaySaldo(){
    saldoVisivel = !saldoVisivel;
    if(saldoVisivel){
        saldoDisplay.textContent = dados.saldo;
    }
    else{
        saldoDisplay.textContent = oculto;
    }
}

btSaldo.addEventListener("click", atualizaDisplaySaldo);


// Visualizar limite e fatura do cartão de crédito
const btLimite = document.getElementById("limite-bt");
const btFatura = document.getElementById("fatura-bt");
const limiteDisplay = document.getElementById("limite-display");
const faturaDisplay = document.getElementById("fatura-display");

let limiteVisivel = false;
let faturaVisivel = false;

function atualizaDisplayLimite(){
    limiteVisivel = !limiteVisivel;
    if(limiteVisivel){
        limiteDisplay.textContent = dados.limite;
    }
    else{
        limiteDisplay.textContent = oculto;
    }
}

btLimite.addEventListener("click", atualizaDisplayLimite);

function atualizaDisplayFatura(){
    faturaVisivel = !faturaVisivel;
    if(faturaVisivel){
        faturaDisplay.textContent = dados.fatura;
    }
    else{
        faturaDisplay.textContent = oculto;
    }
}


btFatura.addEventListener("click", atualizaDisplayFatura);
