const paragEquation = document.querySelector('#equation');

const inputValues = document.querySelector('#inputValues');

const paragOperationSelect = document.querySelector('#operation-select');

const paragMalformed = document.querySelector('#malformed');

const btnsNumbers = document.querySelectorAll('.btns-numbers');

const btnsOperators = document.querySelectorAll('.btns-operators');

const btnEqual = document.querySelector('#btnEqual');

const btnClear = document.querySelector('#btn-clear');

for(var i=0;i<btnsNumbers.length;i++) {
    btnsNumbers[i].onclick = (e) => {
        inputValues.value+=e.target.value;
    };
};

for(var i=0;i<btnsOperators.length;i++) {
    btnsOperators[i].onclick = (e) => {
        inputValues.value+=e.target.value;
        paragOperationSelect.textContent=e.target.value;
    }
};


function verificacao() {
    if(inputValues.value) {

        let getInputValues = inputValues.value;

        for(var i=0;i<getInputValues.length;i++) {
            getInputValues = getInputValues.replace('x','*');
            getInputValues = getInputValues.replace('÷','/');
        }

        calculo(getInputValues);
    };
}

function calculo(valor) {
    try {
        paragEquation.textContent = inputValues.value;
        inputValues.value = eval(valor);
        paragMalformed.innerHTML='&nbsp';
    }catch(error) {
        paragEquation.innerHTML ='$nbsp;';
        paragMalformed.textContent = 'Malformed Expression';
    }
};

btnEqual.onclick = verificacao;


btnClear.onclick = () => {
    paragEquation.innerHTML = '&nbsp;';
    inputValues.value = '';
    paragMalformed.innerHTML= '&nbsp;';
    paragOperationSelect.innerHTML = '&nbsp;';

}

