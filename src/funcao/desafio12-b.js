// Imprimir a posição do numero 5 e 9:

// fazer com for


// function posicao (numeros){
    
//     if(numeros.length<=3){
//         return
//     }

//     return 'posição 5: valor: ' + numeros[4] + ';' + 'posição 9: valor: ' + numeros[8]

// }

// console.log(posicao([7,9,2,5,7,4]))
// console.log(posicao([7,9,2,5,7,4,0,9,7,8]))
// console.log(posicao([]))



// Encontrar a posição do numero 5 e 9:

// fazer com for



function posicao5 (numeros){
    
    for(let i=0; i<numeros.length; i++){
        let numeroAtual = numeros[i]        
        if(numeroAtual == 5){
            
            return ('posição do 5: ' + i)
            
        }
        
    }
         
    
}

function posicao9 (numeros){
    for(let i=0; i<numeros.length; i++){
        let numeroAtual = numeros[i]
        if(numeroAtual == 9){
            return ('posição do 9: ' + i)
        }
        
    }
}


console.log(posicao5([7,9,2,5,7,4]))
console.log(posicao9([7,9,2,5,7,4,0,9,7,8]))
console.log(posicao5([]))


