const numeros = [-4, 3, -9, 0, 4, 1]

let maiorQueZero = 0
let menorQueZero = 0
let igualAZero = 0
let somaTotal = numeros.length


for (let i = 0; i< numeros.length; i++){
    //somar numeros que sao maiores que zero
    if (numeros[i] > 0){
        maiorQueZero = maiorQueZero + 1
        
    }
    //somar numeros que sao menores que zero
    if (numeros[i] < 0){
        menorQueZero = menorQueZero + 1
    }
    //somar os numeros zeros     
    if (numeros[i] == 0){
        igualAZero = igualAZero + 1
    }    
}



console.log(maiorQueZero/somaTotal)
console.log(menorQueZero/somaTotal)
console.log(igualAZero/somaTotal)
