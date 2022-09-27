//retirar os espaços finais de uma string

function retirarEspacos (stringNome){

    let arrString = stringNome.split(' ')

    let arrPalavra = []
    
    for(let i = 0; i<arrString.length; i++){
        let palavraAtual = arrString[i]
        let espaço = ('')
        if(palavraAtual != espaço){ 
            arrPalavra.push(palavraAtual)
        }
    }
    
    return arrPalavra.join('')
}


console.log(retirarEspacos("jessica    1"))