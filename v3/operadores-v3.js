function Somar(){
    // obter os elementos e os valores digitados pelos usuários
    const verificaV1 = document.getElementById('valor01').value;
    console.log(verificaV1)
    const verificaV2 = document.getElementById('valor02').value;
    console.log(verificaV2)


    // Comparação do Tipo e Valor (===) | (==) Compara apenas valor
    /* && = E | || = OU */
    if (verificaV1 === '' || verificaV2 === ''){

        alert('Valor 01 ou Valor 02 em branco, digite um número válido')

    } else{

        let v1 = parseFloat(document.getElementById('valor01').value);
        let v2 = parseFloat(document.getElementById('valor02').value);
        document.getElementById('resultado').style.display = 'flex'


        const resultado = document.getElementById('resultado');
        resultado.innerHTML =
        ` <h1> Memória de Cálculo </h>
        <ul>
            <li>Operação: <span>SOMA</span> </li>
                    <li>Valor 01 digitado pelo usuário: <span> ${v1} </span> </li>
                    <li>Valor 02 digitado pelo usuário: <span>${v2}</span> </li>       
                    <li>O resultado da operação é ${v1} + ${v2} = <span>${v1 + v2}</span> </li>
        </ul>
        `;

};

};


    

function Subtrair(){
        const verificaV1 = document.getElementById('valor01').value;
        const verificaV2 = document.getElementById('valor02').value;

        if (verificaV1 === '' || verificaV2 === ''){

            alert('Valor 01 ou Valor 02 em branco, digite um número válido')

        } else{

            let v1 = parseFloat(document.getElementById('valor01').value);
            let v2 = parseFloat(document.getElementById("valor02").value);
            document.getElementById('resultado').style.display = 'flex'

            const resultado = document.getElementById('resultado');
            resultado.innerHTML =
            `<h1> Memória de Cálculo </h>
        <ul>
            <li>Operação: <span>SUBTRAÇÃO</span> </li>
                    <li>Valor 01 digitado pelo usuário: <span> ${v1} </span> </li>
                    <li>Valor 02 digitado pelo usuário: <span>${v2}</span> </li>       
                    <li>O resultado da operação é ${v1} - ${v2} = <span>${v1 - v2}</span> </li>
        </ul>
            `
        }

    }


function Multiplicar(){
        const verificaV1 = document.getElementById('valor01').value;
        const verificaV2 = document.getElementById('valor02').value;

        if (verificaV1 === '' || verificaV2 === ''){

            alert('Valor 01 ou Valor 02 em branco, digite um número válido')

        } else{

            let v1 = parseFloat(document.getElementById('valor01').value);
            let v2 = parseFloat(document.getElementById('valor02').value);
            document.getElementById('resultado').style.display = 'flex'

            const resultado = document.getElementById('resultado');
            resultado.innerHTML =

            ` <h1> Memória de Cálculo </h>
        <ul>
            <li>Operação: <span>SOMA</span> </li>
                    <li>Valor 01 digitado pelo usuário: <span> ${v1} </span> </li>
                    <li>Valor 02 digitado pelo usuário: <span>${v2}</span> </li>       
                    <li>O resultado da operação é ${v1} * ${v2} = <span>${v1 * v2}</span> </li>
        </ul>
        `;

        }
        
    }
    function Dividir(){

        const verificaV1 = document.getElementById('valor01').value;
        const verificaV2 = document.getElementById('valor02').value;


        if (verificaV1 === '' || verificaV2 === ''){

            alert('Valor 01 ou Valor 02 em branco, digite um número válido')

        } else{

            let v1 = parseFloat(document.getElementById('valor01').value);
            let v2 = parseFloat(document.getElementById('valor02').value);
            document.getElementById('resultado').style.display = 'flex'

            const resultado = document.getElementById('resultado');
            resultado.innerHTML = 
            ` <h1> Memória de Cálculo </h>
        <ul>
            <li>Operação: <span>SOMA</span> </li>
                    <li>Valor 01 digitado pelo usuário: <span> ${v1} </span> </li>
                    <li>Valor 02 digitado pelo usuário: <span>${v2}</span> </li>       
                    <li>O resultado da operação é ${v1} ÷ ${v2} = <span>${v1 / v2}</span> </li>
        </ul>
        `;

        };

    };
    function Porcentagem(){

        const verificaV1 = document.getElementById('valor01').value;
        const verificaV2 = document.getElementById('valor02').value;

        if (verificaV1 === '' || verificaV2 === ''){

            alert('Valor 01 ou Valor 02 em branco, digite um número válido')

        } else{

            let v1 = parseFloat(document.getElementById('valor01').value);
            let v2 = parseFloat(document.getElementById('valor01').value);
            document.getElementById('resultado').style.display = ' flex'

            const resultado = document.getElementById('resultado');
            resultado.innerHTML = 
            ` <h1> Memória de Cálculo </h>
        <ul>
            <li>Operação: <span>SOMA</span> </li>
                    <li>Valor 01 digitado pelo usuário: <span> ${v1} </span> </li>
                    <li>Valor 02 digitado pelo usuário: <span>${v2}</span> </li>       
                    <li>O resultado da operação é ${v1}*${v2}/100 = <span>${(v1*v2)/100}</span> </li>
        </ul>
        `;

        };

    };
    function CalcPagVista(){
        const verificaV1 = document.getElementById('valor01').value;
        const verificaV2 = document.getElementById('valor02').value;

        if (verificaV1 === '' || verificaV2 === ''){

            alert('Valor 01 ou Valor 02 em branco, digite um número válido')

        } else{

            let v1 = parseFloat(document.getElementById('valor01').value);
            let v2 = parseFloat(document.getElementById('valor01').value);
            document.getElementById('resultado').style.display = ' flex'

            const resultado = document.getElementById('resultado');
            resultado.innerHTML = 
            ` <h1> Memória de Cálculo </h>
        <ul>
            <li>Operação: <span>SOMA</span> </li>
                    <li>Valor 01 digitado pelo usuário: <span> ${v1} </span> </li>
                    <li>Valor 02 digitado pelo usuário: <span>${v2}</span> </li>       
                    <li>O resultado da operação é ${v1}*${v2}/100 = <span>${(v1*v2)-v1}</span> </li>
        </ul>
        `;

        };

    };
    function CalcPagPrazo(){

    };




function Limpar(){
    // esconder o container de resultado
    document.getElementById('resultado').style.display = 'none';

    // esconder os numeros no input
    document.getElementById('valor01').value = '';
    document.getElementById('valor02').value = '';
};