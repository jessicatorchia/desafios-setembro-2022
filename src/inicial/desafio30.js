// converter valores do array para fahrenheit colocando em um novo array

arrayEntrada = [30, 35, 40, 60]

arrayConversao = []

for(let i=0; i< arrayEntrada.length; i++){
    let numeroAtual = arrayEntrada[i]
    numeroAtual = (numeroAtual * 1.8) + 32
    arrayConversao[arrayConversao.length] = numeroAtual
}

console.log(arrayConversao)