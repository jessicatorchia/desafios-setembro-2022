//remover os espaços de uma string

const entrada = 'jessica barros torchia  '

const arrEntrada = entrada.split('')

let nomeSemEspaco = arrEntrada.filter((caracterAtual)=>{
    if(caracterAtual != ' '){
        
        return true
    }
})


console.log(nomeSemEspaco.join(''))