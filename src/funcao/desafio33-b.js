// receber um array e gerar um novo array com valores que são numeros primos 
// em outro array com os valores que não são.


function separadorDeNumPrimo (numeros){
    let arrPrimo = []
    let arrNaoPrimo = [] 
    
    for(let i=0; i<numeros.length; i++){
        let primo = true 
        
        for(let j =2; j<numeros[i]; j++){
    
            if(numeros[i] % j === 0){
                primo = false
                break
            } 
        }
        if(primo == false){
            arrNaoPrimo[arrNaoPrimo.length] = numeros[i]
            return arrPrimo
        }else{
            arrPrimo[arrPrimo.length] = numeros[i]
            return arrNaoPrimo
        }      
    }
    
}

console.log(separadorDeNumPrimo([2,4,5,7,9,12,13,9,8,10]))




