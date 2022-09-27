//recebe um nome completo (nome + sobrenome) e imprime as iniciais do Nome ex: JBT

function transformaEmIniciais (stringNome){
    let arrnome = stringNome.split(" ")

    let arrIniciais = []
    
    for(let i = 0; i<arrnome.length; i++){
        let palavraAtual = arrnome[i]
        arrIniciais.push(palavraAtual.substr(0,1))
    }
    
    return arrIniciais.join('')
}




console.log(transformaEmIniciais('Jessica Barros Torchia'))