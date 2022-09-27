//Imprimir a tabuada do numero 8 de o a 80 com for



function tabuada8 (numero){
    
    let arrTabuada = []
    
    for(let i=0; i<=80 ;i+=8){
        if(i!=0){
            numero* i
        }
        arrTabuada.push(numero * i) 
    }
    return arrTabuada
}
console.log(tabuada8(1))
