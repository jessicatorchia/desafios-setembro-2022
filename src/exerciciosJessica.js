// Imprimir números de 1 a 10:

const { numberTypeAnnotation } = require("@babel/types")


// for(let i=1; i<=10; i+=1){   //ou i++
//     console.log(i)
// }

// Imprimir os números impares menores que 100

// for(let i=1; i<=100; i+=2){  //quer dizer que vai de 2 em 2, assim vai pegar o ímpar
//     console.log(i)
// }

// Imprimir a tabuada do número 8 

// for(let i=8; i<=80; i+=8){
//     console.log(i)
// }

// for (let i = 1; i <= 100; i++) {
//     let tabuada = (i * 8)
//     console.log(tabuada);
// }


// Imprimir todas as tabuadas do número 1 ao 10 

// function imprimirTabuada(n)
//     for(let i = 1; i<=10; i++){
//     let tabuada = ((i * i))
//     console.log(tabuada);
// }

// function ImprimirTabuada(n) {
//     for (var i = 1; i <= 10; i++) {
//     var linha = n + " * " + i + " = " + n * i;
//     console.log(linha);
//     }
//    }
//    for (var i = 1; i <= 10; i++) {
//     ImprimirTabuada(i);
//     console.log("");
//    } 

// Imprimir a multiplicação de todos por todos

// const arr = [7,9,2,5,7,4]

// let multiplicados = 1


// for(let i = 0 ; i<arr.length; i++){
//     let numeroAtual = arr[i]
//     multiplicados = numeroAtual*multiplicados
// }

// console.log(multiplicados)

// Imprimir o maior número

//pegar o primeiro numero do arry e comparar com o segundo, etc e guardar o valor
//após imprimor no terminal o resultado

// const arr = [7,9,2,51,7,14];

// let maior = arr[0]

// for(let i=0; i< arr.length; i++){
//     let numeroAtual = arr[i]
//     if(numeroAtual>= maior){
//         maior = numeroAtual
//     }
// }

// console.log(maior)


//Encontrar o menor

// const arr = [7,9,2,51,9,1];

// let menor = arr[0]

// for(let i = 0;i< arr.length; i++){
//     let numeroAtual = arr[i]
//     if(numeroAtual <= menor){
//         menor = numeroAtual
//     }
// }

// console.log(menor)

// Imprimir a soma dos números

// const arr = [7,9,2,5,7,4]

// let soma = 0

// for(let i = 0; i <arr.length; i++){
//     let numeroAtual = arr[i]
//     soma = soma + numeroAtual
// }

// console.log(soma)

// Imprimir quem está na terceira posição:

// const arr = [7,9,2,5,7,4]

// console.log(arr[2])

// Encontrar a posição do numero 5 e 9:

// fazer com for

// const arr = [7,9,2,5,7,4]

// let posicaoNumero5 = 5

// for(let i = 0; i< arr.length; i++){
//     let numeroAtual = arr[i]
//     if(numeroAtual == posicaoNumero5)
//     posicaoNumero5 = i
// }

// console.log(posicaoNumero5)

//Imprimir todos os números somados por 10 e imprimir todos os numeros multiplicados por 7

// const arr = [7,9,2,5,7,4]

// for(let i =0; i<arr.length; i++){
//     let numeroAtual = arr[i]
//     numeroAtual = numeroAtual + 10
//     console.log(numeroAtual)
// }


// for(let i =0; i<arr.length; i++){
//     let numeroAtual = arr[i]
//     numeroAtual = numeroAtual *7
//     console.log(numeroAtual)
// }

// Imprimir os ímpares
// Imprimir os pares

// const arr = [7,9,2,5,7,4]


// for(let i = 0; i<arr.length; i++){
//     let numeroAtual = arr[i]
//     if(numeroAtual % 2 == 0){
//         console.log(numeroAtual)
//     }
    
// }



// for(let i = 0; i<arr.length; i++){
//     let numeroAtual = arr[i]
//     if(numeroAtual % 2 !== 0){
//         console.log(numeroAtual)
        
//     }
    
// }



// imprime o segundo maior

// const arr = [-9,-8,-2,4]

// let maior = arr[0]

// let segMaior = arr[0]

// for(let i=0; i<arr.length; i++){
//     let numeroAtual = arr[i]
//     if(numeroAtual > maior){
//         segMaior =maior
//         maior = numeroAtual
//     }
//     if(numeroAtual != maior && numeroAtual > segMaior){
//         segMaior = numeroAtual

//     }
    

    
    

// }

// console.log(maior)
// console.log(segMaior)

//Imprimir o segundo menor numero do array

// const arr = [4,3,1]

// let menor = arr[0]

// let segMenor = arr[0]

// for(i=0; i<arr.length; i++){
//     let numeroAtual = arr[i]
//     if(numeroAtual < menor){
//         segMenor = menor
//         menor = numeroAtual
//     }
//     if(numeroAtual != menor && numeroAtual<segMenor){
//         segMenor = numeroAtual
//     }
// }

// console.log(segMenor)
// console.log(menor)

//Imprimir a tabuada do numero 8 de o a 80 com for

for(i=8; i<80; i++){
    console.log(i)
}

