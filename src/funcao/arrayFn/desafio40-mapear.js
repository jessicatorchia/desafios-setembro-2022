//entrar com uma string nome e sobrenome em minusculo, converter a ultima letra de cada palavra em maiúsculo e devolver em string

let str = ("jessica barros torchia")

let nomeArr = str.split(' ')


const conversorUltimaLetraMaiuscula = nomeArr.map((palavraAtual)=> {
    
    let ultimaLetra = palavraAtual.substr(palavraAtual.length-1)
    let resto = palavraAtual.substr(0,palavraAtual.length-1)
    ultimaLetra = ultimaLetra.toUpperCase()
    palavraAtual = resto + ultimaLetra
    return palavraAtual
})



console.log(conversorUltimaLetraMaiuscula.join(' '))