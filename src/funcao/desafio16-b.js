//Imprimir quem está na posição 4, 5, 6


function posicao4 (numeros){
    if(numeros[4] == undefined){
        return undefined
    }
    
    for (let i = 0; i< 5; i++){
              
        if(i = 4){
            return numeros[4]
        }
    }
        
}

function posicao5 (numeros){
    if(numeros[5] == undefined){
        return undefined
    }
    
    for (let i = 0; i< 6; i++){
              
        if(i = 5){
            return numeros[5]
        }
    }
        
}



console.log(posicao4([7,9,2,5,7,4]))
console.log(posicao5([7,9,2,5,7]))