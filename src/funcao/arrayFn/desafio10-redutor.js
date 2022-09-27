// Imprimir a soma dos números

const arrEntrada = [1,1,8]

let somaDosNume = arrEntrada.reduce((acumulador, numeroAtual)=>{
    numeroAtual = acumulador + numeroAtual
    return numeroAtual
},0)


console.log(somaDosNume)

