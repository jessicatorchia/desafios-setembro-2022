//remover os espaços de uma string


function removeEspaco (stringNome){
    let entradaSemEspaço = ''

    for(let i=0; i<stringNome.length; i++){
        if(stringNome[i] != ' '){
            entradaSemEspaço = entradaSemEspaço + stringNome[i]
        }
    }
    return entradaSemEspaço
}

console.log(removeEspaco('jessica barros torchia  '))