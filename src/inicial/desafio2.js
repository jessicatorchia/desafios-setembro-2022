// const numeros = [1,32,3,4,5]

//reordenar o array em ordem crescente

/*const sorted = numeros.sort((a,b)=>{
    if (a <b) return -1;
    if (a < b) return 1;
    return 0;
});

console.log(sorted);
*/
//somar os 4 primeiros elementos e somar os 4 ultimos elementos

//console.log((sorted[0]+sorted[1]+sorted[2]+sorted[3]), (sorted[1]+sorted[2]+sorted[3]+sorted[4]))

// console.log(
//     sorted.filter((valor, indice)=>{
//         if(indice !== 0) return true;
//     }).reduce((acc,cur)=> acc+cur, 0),
//     sorted.filter((valor, indice)=> {
//         if(indice !== 4) return true;
//     }).reduce((acc,cur)=> acc+cur, 0),
// )


// let soma1 = 0
// let soma2 = 0

// for (let i = 0; i< 4; i++){
//     //somar valores do indice 0 ao 3
//     soma1 += numeros[i]  
     
// }

// for (let i = 1; i<= 4 ; i++){
//     //somar valores do indice 1 ao 4
//     soma2 += numeros[i]  
     
// }

// console.log(soma1, soma2)


const numeros = [1,32,3,4,5]

let maior = 0
for (let i = 0; i < numeros.length; i ++){
    const atual = numeros[i]
    if (atual>maior){
        maior= atual
    }
}

let menor = numeros[0]
for (let i = 0; i < numeros.length; i ++){
    const atual = numeros[i]
    if (atual<menor){
        menor= atual
    }
}

let soma = 0
for (let i = 0; i < numeros.length; i ++){
    soma=soma+numeros[i]
}

console.log(soma-maior , soma - menor)