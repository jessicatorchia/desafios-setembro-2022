// converter valores do array para fahrenheit colocando em um novo array

const arr = [30, 35, 40, 60]

const transformaEmFahrenheit = arr.map((numeroAtual)=> (numeroAtual * 1.8) + 32)

console.log(transformaEmFahrenheit)
