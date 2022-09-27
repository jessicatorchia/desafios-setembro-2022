// Imprimir a soma dos números


function somaDosNumeros (numeros){
    if(numeros.length == 0){
        return undefined
    }
    let soma = 0

    for (let i=0; i < numeros.length; i++){
        let numeroAtual = (numeros[i])
        soma = soma + numeroAtual
    }
    return soma
}




console.log(somaDosNumeros([]))

console.log(somaDosNumeros([1,2,-5]))

console.log(somaDosNumeros([1,1,8]))


