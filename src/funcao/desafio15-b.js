// Imprimir os ímpares
// Imprimir os pares



function par (numeros){
    if(numeros.length == 0){
        return
    }

    let arrPar = []
       
    for (let i=0; i<numeros.length; i++){
        let numeroAtual =numeros[i]
        if( numeroAtual % 2 === 0){
           arrPar.push(numeroAtual)
        }
    }
    return arrPar

}

function impar (numeros){
    if(numeros.length == 0){
        return
    }

    let arrImpar = []

    for (let i=0; i<numeros.length; i++){
        let numeroAtual =numeros[i]
        if( numeroAtual % 2 != 0){
            arrImpar.push(numeroAtual)
        }
    }
    return arrImpar
}







console.log(par([7,9,2,5,7,4]))
console.log(impar([7,9,2,5,7,4]))
console.log(par([]))


