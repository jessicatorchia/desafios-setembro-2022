//Imprimir o segundo maior numero do array

const arr = [7,2,5,9,7,4,10]


let maior = arr[0]

let segMaior = 0

for(let i=0; i<arr.length; i++){
    let numeroAtual = arr[i]

    if(numeroAtual > maior){
        segMaior = maior
        maior = numeroAtual
    }
    if(numeroAtual != maior && numeroAtual > segMaior){
        segMaior = numeroAtual
    }
}

console.log(segMaior)
console.log(maior)
/*Descobri que quando faço if, posso dar mais de uma condição, pois algumas situações, as posições dos valores de um array
não serão contempladas todas as posições dentro de um if, por isso preciso verificar a ordem crecente e decrescente para 
ver se tal situação precisaria de mais um If que possa abranger toda a array.
*/
