//Imprimir todos os números somados por 10 e imprimir todos os numeros multiplicados por 7

const arr = [7,9,2,5,7,4]

const somaPor10 = arr.map((numeroAtual)=> 10 + numeroAtual)

const multiplicaPor7 = arr.map((numeroAtual)=> 7* numeroAtual)


console.log(somaPor10)
console.log(multiplicaPor7)