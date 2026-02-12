
/* Captura os inputs uma única vez para reutilização em outras oeprações */
const input01 = document.getElementById('valor01');
const input02 = document.getElementById('valor02');

/* Captura o container onde o resultado será exibido */
const resultado = document.getElementById('resultado');





function somar(){
    /* Converte os valores digitados para número */
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if (isNaN(v1) || isNaN(v2)) {

        alert('valor 01 ou valor 02 invalido. DIigte um número')

    } else{

        resultado.style.display = 'flex'

        resultado.innerHTML = `
            <h1> Memória de Cálculo </h>
        <ul>
            <li>Operação: <span>SOMA</span> </li>
                    <li>Valor 01 digitado pelo usuário: <span> ${v1} </span> </li>
                    <li>Valor 02 digitado pelo usuário: <span>${v2}</span> </li>       
                    <li>O resultado da operação é ${v1} + ${v2} = <span>${v1 + v2}</span> </li>
        </ul>
        `
    }

    

};


function subtrair(){
    const v1 = par
};


function multiplicar(){

};


function dividir(){

};


function calcPagVista(){

};

function calcPagPrazo(){

};


function porcentagem(){

};


function limpar(){
    resultado.style.display = 'none';

    input02.value = '';
    input01.value = '';

    input01.focus();

};

