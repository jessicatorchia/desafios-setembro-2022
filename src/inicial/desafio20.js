//Imprimir o segundo menor numero do array

const arr = [4,3,1]

let menor = arr[0]

let segMenor = arr[0]

for( let i = 0; i<arr.length; i++){
    let numeroAtual = arr[i]
    
    if(numeroAtual < menor){
        segMenor = menor
        menor=numeroAtual
    }
    if(numeroAtual != menor && numeroAtual < segMenor){
        segMenor = numeroAtual
    }
    
    
}



console.log(segMenor)

console.log(menor)
