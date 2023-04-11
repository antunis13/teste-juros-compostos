

const botaoSimular = document.querySelector('#simular')
botaoSimular.onclick = () =>{
    const simulador = document.querySelector('.simulador')
    const inputNome = document.querySelector('#nome')
    const nome = inputNome.value
    const mensalidade = document.querySelector('#mensalidade').value
    const contribuicao = document.querySelector('#contribuicao').value
    const juros = document.querySelector('#juros').value
    const jurosDecimal = parseFloat(juros.replace(",",".").replace("%","")/100)
    const expression = {expr:`${mensalidade}*(((1 +${jurosDecimal})^${contribuicao}-1)/${jurosDecimal})`}
    const jsonExpr = JSON.stringify(expression.expr)
    
    const showResult = (response) =>{
        const secondPage = document.querySelector('.secondPage')
        const resultado = response.result
        const valor = parseFloat(resultado)
        const valorFormatado = valor.toFixed(2)

        simulador.style.display = 'none'

        secondPage.innerHTML = `<p> Olá ${nome}, juntando R$ ${mensalidade} todo mes, você terá R$ ${valorFormatado} em ${contribuicao} meses ` 
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
  

