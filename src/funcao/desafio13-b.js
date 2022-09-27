//Imprimir o quadrado de cada número:



function quadradoDeCada (numeros){

    if(numeros.length == 0){
        return
    }

    let arrSaida = []

    for (i=0; i<numeros.length; i++){
        arrSaida.push(numeros[i]* numeros[i])
    }
    return arrSaida

}



console.log(quadradoDeCada([7,9,2,5,7,4]))
console.log(quadradoDeCada([7,9,2,-5,7,4]))
console.log(quadradoDeCada([]))