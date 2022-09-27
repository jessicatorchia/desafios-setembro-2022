//receber uma palavra e imprimir de tras para frente

const string = "jessica"

let contraria = ""

for(let i = (string.length -1); i>=0; i--){
    let letraAtual = string[i]
    contraria = contraria + letraAtual


}

console.log(contraria)


