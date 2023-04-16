export {inputNome}
export {secondPage}
export {simulador}
export {itempo}
export {imensalidade}
export {ijuros}


import {flag} from "./validation.mjs"

const secondPage = document.querySelector('.secondPage')
const simulador = document.querySelector('.simulador')
const inputNome = document.querySelector('#nome')
const imensalidade = document.querySelector('#mensalidade')
const itempo = document.querySelector('#contribuicao')
const ijuros = document.querySelector('#juros')
const botaoSimular = document.querySelector('#simular')


botaoSimular.onclick = () =>{
    let convert
    const nome = inputNome.value
    const mensalidade = imensalidade.value
    const tempo = itempo.value
    const juros = ijuros.value
    const jurosDecimal = parseFloat(juros.replace(",",".").replace("%","")/100)

    for(let i =1; i <= tempo.length; i++){
        i = 12
        convert = i * tempo
    }
    const expression = {expr:`${mensalidade}*(((1 +${jurosDecimal})^${convert}-1)/${jurosDecimal})`}
    const jsonExpr = JSON.stringify(expression.expr)
    
    const showResult = (response) =>{
        const resultado = response.result
        console.log(resultado)
        const valor = parseFloat(resultado)
        const valorFormatado = valor.toFixed(2)
    
       if(flag == 2){
           if(tempo == 1){
               secondPage.innerHTML = `<h2> Olá ${nome}, juntando R$ ${mensalidade} todo mes, você terá R$ ${valorFormatado} em ${tempo} ano </h2>
               
               <form action="/index.html">
               <button class="return">Simular Novamente</button>
               </form>
               ` 
           }
           else{
               secondPage.innerHTML = `<h2> Olá ${nome}, juntando R$ ${mensalidade} todo mes, você terá R$ ${valorFormatado} em ${tempo} anos </h2>
               
               <form action="/index.html">
               <button class="return">Simular Novamente</button>
               </form>
               ` 
           }
       }
    }
    const config = {
        method: "POST",
        headers: new Headers({
            "Content-type": "application/json"}),
        body: JSON.stringify(expression)
    }

    const query = () =>{
        fetch(`http://api.mathjs.org/v4/?=expr${jsonExpr}`, config)
        .then(response => response.json())
        .then(showResult)
    }
    query() 
  
}
  
