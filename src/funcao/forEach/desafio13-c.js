//Imprimir o quadrado de cada número:



function quadradoDeCada (numeros){

    if(numeros.length == 0){
        return
    }

    let arrSaida = []

    numeros.forEach(atual => {
        arrSaida.push(atual* atual)
    })

    return arrSaida
}

console.log(quadradoDeCada([7,9,2,5,7,4]))
console.log(quadradoDeCada([7,9,2,-5,7,4]))
console.log(quadradoDeCada([]))