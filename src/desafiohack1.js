let entrada = [-4, 3, -9, 0, 4, 1]


function contadorPositivos (numeros){
    let quantidadePositiva = 0
 
    for(let i=0; i<numeros.length; i++){
        let numeroAtual = numeros[i]

        if(numeroAtual >= 0){
            quantidadePositiva = quantidadePositiva + 1
        }
    }
    return quantidadePositiva / entrada.length
}

function contadorNegativos (numeros){
 
    let quantidadeNegativo = 0

    for(let i=0; i<numeros.length; i++){
        let numeroAtual = numeros[i]
 
        if(numeroAtual < 0){
            quantidadeNegativo = quantidadeNegativo +1
        }      
    }
    return quantidadeNegativo / entrada.length

}

function contadorZeros (numeros){
    let quantidadeZero = 0

    for(let i=0; i<numeros.length; i++){
        let numeroAtual = numeros[i]

        if(numeroAtual === 0){
            quantidadeZero = quantidadeZero + 1
        }
    }
    return quantidadeZero / entrada.length
}




console.log(contadorPositivos(entrada))
console.log(contadorNegativos(entrada))
console.log(contadorZeros(entrada))