//entrar com uma string nome e sobrenome em minusculo, conveerter a primeira letra de cada palavra em maiusculo e devolver em string

function conversorPrimeiraLetraMaiuscula (stringNome){

    let nomeArr = stringNome.split(' ')

    let arrMaiusculo = []
    
    nomeArr.forEach((palavraAtual)=>{
        let primLetra = palavraAtual.substr(0,1)
        let resto = palavraAtual.substr(1)
        primLetra = primLetra.toUpperCase()
        arrMaiusculo.push(primLetra + resto)
    })

        
    return arrMaiusculo.join(' ')
}




console.log(conversorPrimeiraLetraMaiuscula("jessica barros torchia"))
