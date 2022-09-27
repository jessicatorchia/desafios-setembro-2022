// receber um array e gerar um novo array com valores que são numeros primos 
// em outro array com os valores que não são.

const arrEntrada = [2,4,5,7,9,12,13,9,8,10]


let arrPrimo = []



let arrNaoPrimo = []


for(let i=0; i<arrEntrada.length; i++){
    let primo = true 
    
    for(let j =2; j<arrEntrada[i]; j++){

        if(arrEntrada[i] % j === 0){
            primo = false
            break
        } 
    }
    if(primo == false){
        arrNaoPrimo[arrNaoPrimo.length] = arrEntrada[i]
    
    }else{
        arrPrimo[arrPrimo.length] = arrEntrada[i]
    }
  
}

console.log(arrPrimo)

console.log(arrNaoPrimo)

/*

let arrPrimo = []



let arrNaoPrimo = []

function ehPrimo(numeroAtual){
    for(let j =2; j<numeroAtual; j++){
        if(numeroAtual % j === 0){
           return false
        } 
    }
    return true
}


for(let i=0; i<arrEntrada.length; i++){
    if(ehPrimo(arrEntrada[i])){
        arrPrimo[arrPrimo.length] = arrEntrada[i]
    }else{
        arrNaoPrimo[arrNaoPrimo.length] = arrEntrada[i]
    }
}

console.log(arrPrimo);

console.log(arrNaoPrimo)
*/