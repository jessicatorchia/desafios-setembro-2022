//retirar os espaços do começo de uma string sem usar array vazio, split e join

const stringEntrada = "jessica     "

let semEspaço = stringEntrada

let palavra = ''
let posicaoEncontrada

for(let i = 0; i<stringEntrada.length; i++){
    let letraAtual = stringEntrada[i]
    if(letraAtual == " "){
        posicaoEncontrada = i
    }
}

for(let i=0; i<posicaoEncontrada; i++){
    palavra = palavra + stringEntrada.charAt(i)
}

console.log(palavra)


/*nao entendi direito
*/
