// Encontrar a posição do numero 5 e 9:

// fazer com for

const arr = [7,9,2,5,7,4]

let posicaoNumero5 = 4
let posicaoNumero9 = 9


for(let i=0; i<arr.length; i++){
    let numeroAtual = arr[i]
    if(numeroAtual == posicaoNumero5){
        posicaoNumero5 =i
    }
}

for(let i=0; i<arr.length; i++){
    let numeroAtual = arr[i]
    if(numeroAtual == posicaoNumero9){
        posicaoNumero9 =i
    }
}

console.log(posicaoNumero5)
console.log(posicaoNumero9)


//outra forma de fazer, seria:
// console.log(arr.indexOf(5))
// console.log(arr.indexOf(9))

/*Aprendi que o i é sempre o indice, então uma forma de resolver com FOR
é atribuindo o i no FOR.
*/