const paragEquation = document.querySelector('#equation');

const inputValues = document.querySelector('#inputValues');

const paragOperationSelect = document.querySelector('#operation-select');

const paragMalformed = document.querySelector('#malformed');

const btns = document.querySelectorAll('[class^="btns-"]');

const btnEqual = document.querySelector('#btnEqual');

for(var i=0;i<btns.length;i++) {
    btns[i].onclick = (e) => {
        inputValues.value+=e.target.value;
    };
};

for(var i=0;i)


function verificacao() {
    let getInputValues = inputValues.value;

    for(var i=0;i<getInputValues.length;i++) {
        getInputValues = getInputValues.replace('x','*');
        getInputValues = getInputValues.replace('÷','/');
    }

    calculo(getInputValues);
};

function calculo(valor) {
    try {
        inputValues.value = eval(valor);
        paragMalformed.innerHTML='&nbsp';
    }catch(error) {
        paragMalformed.textContent = 'Malformed Expression';
    }
};

btnEqual.onclick = verificacao;

