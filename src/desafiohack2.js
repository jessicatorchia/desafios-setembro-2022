let entrada = [1,32,3,4,5] // somar o max e o min


function somaMenoresNume (numeros){

    let arrMinimos = []
    let maior = numeros[0]
    for(let i=0; i<entrada.length; i++){
        let numeroAtual = numeros[i]
        
        if(numeroAtual > maior){
            maior = numeroAtual
            
        }else{
            arrMinimos.push(numeroAtual)
        }
    
    }
    let somaMenores = arrMinimos.reduce((acumulador, numeroAtual)=>{
        return acumulador + numeroAtual
    },0)
    return somaMenores
    
    
}




function somaMaioresNume (numeros){

    let arrMaximo = []
    let menor = entrada[0]
    for(let i=0; i<entrada.length; i++){
        let numeroAtual = entrada[i]
        
        if(numeroAtual <= menor){
            menor = numeroAtual
            
        }else{
            arrMaximo.push(numeroAtual)
        }
    
    }
    
    let somaMaiores = arrMaximo.reduce((acumulador, numeroAtual)=>{
        return acumulador + numeroAtual
    },0)
    return somaMaiores
}



console.log(somaMenoresNume(entrada))

console.log(somaMaioresNume(entrada))


