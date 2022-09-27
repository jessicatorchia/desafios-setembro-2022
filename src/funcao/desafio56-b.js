//Receber uma palavra e montar um aray com o valor da posição do UTF-8 (usar array)


function devolvePosicaoUTF8 (stringNome){
    let strCod = ''

    for(let i = 0; i<stringNome.length; i++){
        let letraAtual = stringNome.charCodeAt(i)
        strCod = strCod + Number(letraAtual) + ' '
    }
    
    let arrCod = strCod.split(' ')
    
    let arrCodCerto = []
    
    for(let i = 0; i<arrCod.length; i++){
        if(arrCod[i] != ''){
            arrCodCerto.push(arrCod[i])
        }
    }

    return arrCodCerto
}

console.log(devolvePosicaoUTF8('jessica'))

