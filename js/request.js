
const botaoSimular = document.querySelector('#simular')


botaoSimular.onclick = () =>{
    const mensalidade = document.querySelector('#mensalidade').value
    const tempo = document.querySelector('#contribuicao').value
    const juros = document.querySelector('#juros').value
    const jurosDecimal = parseFloat(juros.replace(",",".").replace("%","")/100)
    let convert
    for(let i =1; i <= tempo.length; i++){
        i = 12
        convert = i * tempo
    }
    const expression = {expr:`${mensalidade}*(((1 +${jurosDecimal})^${convert}-1)/${jurosDecimal})`}
    const jsonExpr = JSON.stringify(expression.expr)
    
    const showResult = (response) =>{
        const secondPage = document.querySelector('.secondPage')
        const resultado = response.result
        const valor = parseFloat(resultado)
        const valorFormatado = valor.toFixed(2)
        const simulador = document.querySelector('.simulador')
        const inputNome = document.querySelector('#nome')
        const nome = inputNome.value
        simulador.style.display = 'none'
    
        secondPage.innerHTML = `<h2> Olá ${nome}, juntando R$ ${mensalidade} todo mes, você terá R$ ${valorFormatado} em ${tempo} anos </h2>
        
        <form action="/index.html">
        <button class="return">Simular Novamente</button>
        </form>
        ` 
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
  
