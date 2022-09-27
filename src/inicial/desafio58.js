//remover os espaços de uma string

const entrada= 'jessica barros torchia  '

let entradaSemEspaço = ''

for(let i=0; i<entrada.length; i++){
    if(entrada[i] != ' '){
        entradaSemEspaço = entradaSemEspaço + entrada[i]
    }
}

console.log(entradaSemEspaço)