// Calcule a soma dos números ímpares maior que 10 e menor que 30


function somaImparesMaior30 (numeros){

    let somaImpar = 0


    for(let i = 0; i<numeros.length; i++){
        let numeroAtual = numeros[i]
        if(numeroAtual % 2 != 0 && numeroAtual > 10 && numeroAtual < 30){
            somaImpar = somaImpar + numeroAtual 
        }
    }
    return somaImpar
}

console.log(somaImparesMaior30([70,9,2,30,27,14,10,11,31]))

