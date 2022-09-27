// Imprimir a soma dos números


function somaDosNumeros (numeros){
    if(numeros.length == 0){
        return undefined
    }
    let soma = 0

    numeros.forEach((numeroAtual) => {
        soma = soma + numeroAtual
    })
}




console.log(somaDosNumeros([]))

console.log(somaDosNumeros([1,2,-5]))

console.log(somaDosNumeros([1,1,8]))


