// gerar outro array com os números positivos de outro array


function numerosPositivos (numeros){

    if(numeros.length == 0 ){
        return
    }

    let arrPositivo = []
    for(let i=0; i<numeros.length; i++){
        let numeroAtual = numeros[i]
        if(numeroAtual > 0){
            arrPositivo[arrPositivo.length] = numeroAtual
        
        }
    }
    return arrPositivo
}

console.log(numerosPositivos([-7,9,-2,5,7,-4]))
console.log(numerosPositivos([-7,-4]))
console.log(numerosPositivos([]))

