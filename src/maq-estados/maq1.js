let frase = ['artigo', 'substantivo', 'verbo', 'fim']

let fraseInvalida = ['artigo', 'verbo', 'fim']



function fraseEhValida(frase) {
    let estado = 0
    
    for(let i = 0; i < frase.length; i++) {
        let palavraAtual = frase[i]
        if(estado === 0) {
            if(palavraAtual === 'artigo' || palavraAtual === 'numeral') {
                estado = 1
            } else {
                return false
            }
        }
        else if(estado === 1) {
            if(palavraAtual === 'substantivo') {
                estado = 2
            } else {
                return false
            }
        }
        else if(estado === 2) {
            if(palavraAtual === 'verbo') {
                estado = 3
            }
            else if(palavraAtual === 'adjetivo') {
                estado = 4
            }    
            else {
                return false
            }        
        }
        else if(estado === 3) {
            if(palavraAtual === 'preposicao') {
                estado = 7
            }
            else if(palavraAtual === 'artigo') {
                estado = 5
            }
            else if(palavraAtual === 'substantivo') {
                estado = 6
            } else if(palavraAtual === 'fim') {
                return true
            }
             else {
                return false
            }
        }
        else if(estado === 4) {
            if(palavraAtual === 'verbo') {
                estado = 3
            } else {
                return false
            }
        }
        else if(estado === 5) {
            if(palavraAtual === 'substantivo') {
                estado = 6
            } else {
                return false
            }
        }
        else if(estado === 6) {
            return true
        }
        else if(estado === 7) {
            if(palavraAtual === 'substantivo') {
                estado = 6
            } else {
                return false
            }
        }
    }
}

console.log(fraseEhValida(fraseInvalida))


