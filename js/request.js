
const botaoSimular = document.querySelector('.simular')
const botaoReturn = document.querySelector('.return')

botaoSimular.onclick = () =>{
    console.log('ok')

    const query = () =>{
        fetch('http://api.mathjs.org/v4/?expr=2*(7-3)')
    }

}

