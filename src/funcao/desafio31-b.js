// receber 2 numeros (primeiro menor e o segundo maior), fazer um array com esses numeros e 
// os numeros entre eles em ordem crescente.

function ordemCrescente (numMenor, numMaior){

    let arrayTotal = []

    for(i= numMenor; i<=numMaior; i++){
        
        arrayTotal[arrayTotal.length] = i
    
    }
    return arrayTotal
}




console.log(ordemCrescente(5,20))
console.log(ordemCrescente())
 