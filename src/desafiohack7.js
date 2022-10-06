// entrada de um array com numeros impares e não repetidos

function transformaZigZag (numeros){

    let maiorNumero = Number.MIN_VALUE             //maior numero

    for(let i=0; i<numeros.length; i++){
        let valorAtual = numeros[i]
        if(valorAtual> maiorNumero){
            maiorNumero = valorAtual
        }
    }
    
    let arrCresc = numeros.sort((a,b)=>{      // ordena o arr entrada, em arr em ordem crescente
        if (a <b) return -1
        if (a < b) return 1
        return 0
    })
    
    let metadeArr = ((numeros.length )-1)/2           //tamanho arr entrada
    let arrTotal = []
    
    for(let i = 0; i < arrCresc.length; i++){
        let numAtual = arrCresc[i]
        if(i < metadeArr && numAtual != maiorNumero){
            arrTotal.push(numAtual)
        }
    }
    
    arrTotal.push(maiorNumero)
    
    for(let i = (arrCresc.length-1); i>=0; i--){
        let numAtual = arrCresc[i]
        if( i >= metadeArr && numAtual != maiorNumero){
            arrTotal.push(numAtual)
        }
    }
    return arrTotal
}

let entrada = [7,2,1,4,6,5,3,8,0]

console.log(transformaZigZag(entrada))










