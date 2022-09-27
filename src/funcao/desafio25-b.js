// calcular a média dos números de array.


function mediaArray (numeros){

    if(numeros.length == 0){
        return
    }
    let soma = 0

    let arrTotal = numeros.length
    
    for(let i = 0; i<numeros.length; i++){
        let arrAtual = numeros[i]
        soma = soma + arrAtual
    }
    return soma/arrTotal
    
}


console.log(mediaArray([7,9,2,5,7,4]))

console.log(mediaArray([]))
console.log(mediaArray([0]))