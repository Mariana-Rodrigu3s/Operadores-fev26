function Somar(){
    let v1 = parseFloat(prompt('Valor01'));
    alert(`O Valor01 digitado pelo usuário ${v1}.`);

    let v2 = parseFloat(prompt('Valor02'));
    alert(`O Valor02 digitado pelo usuário ${v2}.`);

    document.getElementById('resultado').style.display = 'flex';
    document.getElementById('resultado').textContent = `O resultado é ${v1 + v2}.`;

};

function Subtrair(){
    let v1 = parseFloat(prompt('Valor01'));
    alert(`O Valor01 digitado pelo usuário ${v1}.`);

    let v2 = parseFloat(prompt('Valor02'));
    alert(`O Valor02 digitado pelo usuário ${v2}.`);

    document.getElementById('resultado').style.display = 'flex';
    document.getElementById('resultado').textContent = `O resultado é ${v1 - v2}.`;

}
function Multiplicar(){

}
function Dividir(){

}




