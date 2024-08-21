
// variaveis - variable
import { Modal } from './modal.js';
import {alertError} from './alert-error.js'
import { notNumber, imcCalculate } from './utils.js';


// Para selecionar tag (so digitar a tag) 
// Para selecionar id (#)
// Para selecionar classe (.)

const form = document.querySelector('form'); 
const inputWeight = document.querySelector('#weight'); 
const inputHeight = document.querySelector('#height');

inputWeight.oninput = function(){
    alertError.close()
}

inputHeight.oninput = function(){
    alertError.close()
}

form.onsubmit = function(event){
    event.preventDefault(); // evita o comportamento padrão do formulário (envio)
    
    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightNotANumber = notNumber(weight) || notNumber(height)
    if(weightOrHeightNotANumber){
        alertError.open()
        return
    }

    alertError.close()
    
    const imcResult = imcCalculate(weight, height)
    displayResultMessage(imcResult)
}

function displayResultMessage(imcResult) {
    const message = `Seu IMC e de ${imcResult}`

    Modal.message.innerText = message
    Modal.open()
}

