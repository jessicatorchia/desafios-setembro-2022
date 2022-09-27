//Imprimir o menor número


const arr = [7,9,2,5,7,1]

let menorNumero = arr[0]

for( let i = 0; i <= arr.length; i++){
    let numeroAtual = arr[i]
    
    if(numeroAtual < menorNumero){
        menorNumero = numeroAtual
    }

}

console.log(menorNumero)

/*Aprendi que quando eu quero comparar os numeros de um array, eu posso atribuir
na variável let o primeiro indice do array o indice zero, pois quando entra no for, ele muda o valor
da variável e passa a ser outro valor
*/