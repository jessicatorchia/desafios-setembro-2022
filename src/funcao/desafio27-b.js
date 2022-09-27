// receber um numero, e imprimir se é primo ou não

function verificadorDeNumeroPrimo (numero){
    if(numero == undefined){
        return
    }
    let primo = true

    for(let i = 2; i<numero; i++){
        
        if(numero % i ===0){
            primo = false
            break            
        }      
    }
            
    if(primo ==false){
        return (numero + " Não é primo")
    }
    if(primo == true){
        return (numero + " É primo")
    }
}



console.log(verificadorDeNumeroPrimo(13))

console.log(verificadorDeNumeroPrimo(22))

console.log(verificadorDeNumeroPrimo())

console.log(verificadorDeNumeroPrimo(0))
