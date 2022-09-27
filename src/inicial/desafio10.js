// Imprimir a soma dos números

const arr = [7,9,2,5,7,4]

let somaDosNumeros = 0

for (let i=0; i < arr.length; i++){
    let numeroAtual = (arr[i])
    somaDosNumeros = somaDosNumeros + numeroAtual
}


// let i = 0
// while(i < arr.length)  {
//     let numeroAtual = (arr[i])
//     somaDosNumeros = somaDosNumeros + numeroAtual
//     //i++
// }

console.log(somaDosNumeros)


/*aprendi que o i < arr.length não pode ter <= pois se colocar ele vai entender que
precisa pegar o valor do indice 6 que não tem, pois ele só tem 5 indices, e isso dá no 
códico NaN, pois nessa atribuição dá undefined
*/