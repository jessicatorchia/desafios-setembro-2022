//Imprimir o segundo maior numero do array

function segundoMaior (numeros){

    let maior = numeros[0]

    let segMaior = 0
    
    for(let i=0; i<numeros.length; i++){
        let numeroAtual = numeros[i]
    
        if(numeroAtual > maior){
            segMaior = maior
            maior = numeroAtual
        }
        if(numeroAtual != maior && numeroAtual > segMaior){
            segMaior = numeroAtual
        }
    }
    return segMaior
}

console.log(segundoMaior([7,2,5,9,7,4,10]))





