// Carne - 400 gr por pessoa + 6 horas - 650
// Cerveja  - 1200 ml por pessoa  + 6 horas - 2000 ml
// Refrigerante/Agua - 1000 ml por pessoa + 6 horas 1500ml

// Criança valem por 0,5 

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");


let resultado = document.getElementById("resultado");

let botao = document.getElementById("Calcular");

botao.addEventListener("click", calcular)

function calcular(){

    console.log("calculando");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);

    let qdTotalCerveja = cervejaPP(duracao) * adultos;

    let qdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);


    resultado.innerHTML = `<p>${qdTotalCarne/1000}Kg de Carne </p>`;
    resultado.innerHTML += `<p>${Math.ceil(qdTotalCerveja / 355)} Latas de Cervejas</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qdTotalBebidas/2000)} Garrafas de Bebidas</p>`;
};

function carnePP(duracao){

    if(duracao => 6){

        return 650;

    }
    else{

        return 400;

    }
};

function cervejaPP(duracao){

    if(duracao => 6){

        return 2000;

    }
    else{

        return 1200;

    }
};

function bebidasPP(duracao){

    if(duracao => 6){

        return 1500;

    }
    else{

        return 1000;

    }
};

// Fim