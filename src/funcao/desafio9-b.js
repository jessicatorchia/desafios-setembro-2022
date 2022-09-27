//Imprimir o menor número em uma função


function menorNumero (arrNumeros){
    let menorNumero = arrNumeros[0]

    for( let i = 0; i <= arrNumeros.length; i++){
        let numeroAtual = arrNumeros[i]
        
        if(numeroAtual < menorNumero){
            menorNumero = numeroAtual
        }
    
    }
    return menorNumero
}


console.log(menorNumero([1,2,3]))
console.log(menorNumero([7,9,2,5,7,1]))
console.log(menorNumero([]))
