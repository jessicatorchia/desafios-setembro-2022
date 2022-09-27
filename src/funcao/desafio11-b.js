// Imprimir quem está na terceira posição:


function posicao3 (numeros){
    if(numeros[2] == undefined){
        return undefined
    }
    
    for (let i = 0; i< 3; i++){
              
        if(i = 3){
            return numeros[2]
        }
    }
        
}

console.log(posicao3([7,8,9,10,11]))

console.log(posicao3([7,8,0,10]))

console.log(posicao3([7,8]))

console.log(posicao3([]))
