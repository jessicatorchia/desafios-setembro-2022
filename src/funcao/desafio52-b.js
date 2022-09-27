//receber uma palavra e imprimir sem as vogais(sem usar array)

function imprimeSemVogais (stringNome){
    let stringSemVogais = ''

    for(let i = 0; i<stringNome.length; i++){
        let letraAtual = stringNome[i]
        
        if(letraAtual != 'a'&& letraAtual != 'e' && letraAtual != 'i'&& letraAtual != 'o' && letraAtual != 'u'){
            stringSemVogais = stringSemVogais + letraAtual
        }
    }
    return stringSemVogais    
}

console.log(imprimeSemVogais('jessica'))

