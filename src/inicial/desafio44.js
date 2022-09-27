//retirar os espaços do começo e do final de uma string

const stringEntrada = "    jessica jkjnkjn "

let arrString = stringEntrada.split(' ')

console.log(arrString)

let arrPalavra = []

for(let i = 0; i<arrString.length; i++){
    let palavraAtual = arrString[i]
    let espaço = ''
    if(palavraAtual != espaço){ 
        arrPalavra.push(palavraAtual)
    }
}

let stringPalavra = arrPalavra.join(' ')

console.log(stringPalavra)

