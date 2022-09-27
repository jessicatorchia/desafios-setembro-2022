//entrar com uma string nome e sobrenome em minusculo, conveerter a primeira letra de cada palavra em maiusculo e devolver em string

let str =("jessica barros torchia")

let nomeArr = str.split(' ')

let conversorDeMaiusculo = (palavraAtual)=> {
    
    let primLetra = palavraAtual.substr(0,1)
    let resto = palavraAtual.substr(1)
    primLetra = primLetra.toUpperCase()
    palavraAtual = primLetra +  resto  
    return palavraAtual
}

const conversorPrimeiraLetraMaiuscula = nomeArr.map(conversorDeMaiusculo)

const x = conversorPrimeiraLetraMaiuscula.sort()


console.log(conversorPrimeiraLetraMaiuscula.join(' '))