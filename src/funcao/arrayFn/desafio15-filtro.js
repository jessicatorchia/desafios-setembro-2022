// Imprimir os ímpares
// Imprimir os pares

const entrada = [7,9,2,5,7,4]

let arrPares = entrada.filter((numeroAtual)=>{
    
    if( numeroAtual % 2 === 0){
        
        return true
    }  
})

let arrImpar = entrada.filter((numeroAtual)=>{
    
    if( numeroAtual % 2 != 0){
        
        return true
    }  
})

console.log(arrPares)
console.log(arrImpar)


