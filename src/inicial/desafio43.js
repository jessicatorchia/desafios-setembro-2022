//retirar os espaços do começo de uma string

const stringEntrada = "    jessica"

let arrString = stringEntrada.split(' ')

let arrPalavra = []

for(let i = 0; i<arrString.length; i++){
    let palavraAtual = arrString[i]
    let espaço = ('')
    if(palavraAtual != espaço){ 
        arrPalavra.push(palavraAtual)
    }
}

let stringPalavra = arrPalavra.join('')

console.log(stringPalavra)