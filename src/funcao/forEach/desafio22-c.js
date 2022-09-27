// Calcule a soma dos números ímpares maior que 10 e menor que 30


function somaImparesMaior10Menor30 (numeros){

    let somaImpar = 0

    numeros.forEach ((numeroAtual) =>{
        if(numeroAtual %2 != 0 && numeroAtual > 10 && numeroAtual < 30){
            somaImpar = somaImpar + numeroAtual
        }
    })
 
    return somaImpar
}

console.log(somaImparesMaior10Menor30([70,9,2,30,27,14,10,11,31]))

