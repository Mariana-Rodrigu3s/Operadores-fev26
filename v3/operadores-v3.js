function Somar(){
    // obter os elementos e os valores digitados pelos usuários
    const verificaV1 = document.getElementById('valor01').value;
    console.log(verificaV1)
    const verificaV2 = document.getElementById('valor02').value;
    console.log(verificaV2)

    // IF do JS 
    
    // if(teste){

    // } else{

    // };

};


function Limpar(){
    // esconder o container de resultado
    document.getElementById('resultado').style.display = 'none';

    // esconder os numeros no input
    document.getElementById('valor01').value = '';
    document.getElementById('valor02').value = '';
};