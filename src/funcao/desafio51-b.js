//receber uma palavra e imprimir de tras para frente

function viraPalavra (stringNome){
    let contraria = ""

    for(let i = (stringNome.length -1); i>=0; i--){
        let letraAtual = stringNome[i]
        contraria = contraria + letraAtual
    }
    return contraria
}

console.log(viraPalavra("jessica"))


