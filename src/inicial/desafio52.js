//receber uma palavra e imprimir sem as vogais(sem usar array)

const string = 'jessica'

let stringSemVogais = ''



for(let i = 0; i<string.length; i++){
    let letraAtual = string[i]
    
    if(letraAtual != 'a'&& letraAtual != 'e' && letraAtual != 'i'&& letraAtual != 'o' && letraAtual != 'u'){
        stringSemVogais = stringSemVogais + letraAtual
    }
}

console.log(stringSemVogais)

