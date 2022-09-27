//entrar com uma string nome e sobrenome em minusculo, converter a ultima letra de cada palavra em maiúsculo e devolver em string

const nomeEntrada = "jessica barros torchia"

let nomeArr = nomeEntrada.split(' ')


let arrMaiusculo = []

for(let i = 0; i<nomeArr.length; i++){
    let palavraAtual = nomeArr[i]
    let ultimaLetra = palavraAtual.substr(palavraAtual.length-1)
    let resto = palavraAtual.substr(0,palavraAtual.length-1)
    ultimaLetra = ultimaLetra.toUpperCase()
    arrMaiusculo.push(resto + ultimaLetra)
}


let stringMaiuscula = arrMaiusculo.join(' ')

console.log(stringMaiuscula)