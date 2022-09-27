//retirar os espaços do começo de uma string sem usar array vazio, split e join

function retirarEspacosDoComeco (stringNome){
    
    let palavra = ''
    let posicaoEncontrada
    
    stringNome.forEach ((letraAtual,i)=>{
        if(letraAtual == ' '){
            posicaoEncontrada = i
        }
    })
    
    posicaoEncontrada.forEach((stringNome,i)=>{
        palavra = palavra + stringNome.charAt(i)
    })
   
    return palavra
}

console.log(retirarEspacosDoComeco("jessica     1"))

