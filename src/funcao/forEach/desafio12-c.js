// Imprimir a posição do ultimo numero 5:

function posicao5 (numeros){
      
    let numeroPosicao
     
    numeros.forEach((numeroAtual, i)=> {
        if(numeroAtual == 5){
            numeroPosicao = 'posição do 5: ' + i
        }    
    })
    return numeroPosicao
}

console.log(posicao5([7,9,2,5,7,4]))



