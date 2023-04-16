import {inputNome} from './request.mjs'
import {secondPage} from './request.mjs'
import {simulador} from './request.mjs'
import {imensalidade} from './request.mjs'
import {ijuros} from './request.mjs'
import {itempo} from './request.mjs'

export {flag}

const form = document.querySelector('.info')
let flag = 0

form.addEventListener('submit', e =>{
    e.preventDefault()
    checkInputs()
})
function errorValidation(input, message){
    flag = 1
    const formControl = input.parentElement;
    let span = formControl.querySelector('span')
    span.innerText = message
    span.classList.add('errorSpan')
    input.classList.remove('succes')
    input.classList.add('error')
    
    simulador.classList.remove('hidden')
    secondPage.innerHTML = ''
}
function succesValidation(input){
    const formControl = input.parentElement;
    let span = formControl.querySelector('span')
    span.innerText = ''
    span.classList.remove('errorSpan')
    input.classList.add('succes')
    simulador.classList.add('hidden')
    flag = 2
}
function checkInputs(){
    const nameFormValue = inputNome.value.trim()
    const mensalidadeValue = imensalidade.value.trim()
    const jurosValue = ijuros.value.trim()
    const tempoValue = itempo.value.trim()

    if(nameFormValue === '' || nameFormValue === null){
        errorValidation(inputNome, "Preencha este campo corretamente!")
    }else{
        succesValidation(inputNome)
    }
    if(mensalidadeValue === '' || mensalidadeValue === null){
        errorValidation(imensalidade, "Preencha este campo corretamente!")
    }else{
        succesValidation(imensalidade)
    }
    if(jurosValue === '' || jurosValue === null){
        errorValidation(ijuros, "Preencha este campo corretamente!")
    }else{
        succesValidation(ijuros)
    }
    if(tempoValue === '' || tempoValue === null){
        errorValidation(itempo, "Preencha este campo corretamente!")
    }else{
        succesValidation(itempo)
    }
   
}    