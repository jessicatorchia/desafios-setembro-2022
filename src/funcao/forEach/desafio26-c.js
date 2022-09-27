// gerar outro array com os números positivos de outro array


function numerosPositivos (numeros){

    if(numeros.length == 0 ){
        return
    }

    let arrPositivo = []

    numeros.forEach ((numeroAtual)=>{
        if(numeroAtual > 0){
            arrPositivo[arrPositivo.length] = numeroAtual
        }
    })
    
    return arrPositivo
}

console.log(numerosPositivos([-7,9,-2,5,7,-4]))
console.log(numerosPositivos([-7,-4]))
console.log(numerosPositivos([]))

