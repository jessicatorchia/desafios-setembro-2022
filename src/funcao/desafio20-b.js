//Imprimir o segundo menor numero do array

function segundoMenor (numeros){
    
    let menor = numeros[0]
    
    let segMenor = numeros[0]
    
    for( let i = 0; i<numeros.length; i++){
        let numeroAtual = numeros[i]
        
        if(numeroAtual < menor){
            segMenor = menor
            menor=numeroAtual
        }
        if(numeroAtual != menor && numeroAtual < segMenor){
            segMenor = numeroAtual
        }             
    }
    return segMenor
}


console.log(segundoMenor([7,2,5,9,7,4,10]))
