// Imprimir a multiplicação de todos por todos, fazer em função

const entrada = [7,2, 2]

let arrMultiplicado = entrada.reduce((acumulador, numeroAtual)=>{
    return acumulador * numeroAtual
}, 1)

console.log(arrMultiplicado)


