//retirar os espaços do começo de uma string sem usar array vazio, split e join

function retirarEspacosDoComeco (stringNome){
    
   

    let palavra = ''
    let posicaoEncontrada
    
    for(let i = 0; i<stringNome.length; i++){
        let letraAtual = stringNome[i]
        if(letraAtual == " "){
            posicaoEncontrada = i
        }
    }
    
    for(let i=0; i<posicaoEncontrada; i++){
        palavra = palavra + stringNome.charAt(i)
    }
    return palavra
}

console.log(retirarEspacosDoComeco("jessica     1"))

