// calcular a média dos números de array.

const arr = [7,9,2,5,7,4]

let soma = 0

let arrTotal = arr.length

for(let i = 0; i<arr.length; i++){
    let arrAtual = arr[i]
    soma = soma + arrAtual
}



console.log(soma/arrTotal)