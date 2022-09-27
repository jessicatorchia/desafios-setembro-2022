// Imprimir o maior número fazer uma função

//pegar o primeiro numero do arry e comparar com o segundo, etc e guardar o valor
//após imprimor no terminal o resultado

function maiorNumero (arrNumeros){

    let maiorNumero = arrNumeros[0]

    for( let i = 0; i<=arrNumeros.length; i++){
        const numeroAtual = arrNumeros[i]
        
        if(numeroAtual >= maiorNumero){
            maiorNumero = numeroAtual
        }
    }
    return maiorNumero
}


console.log(maiorNumero([7,9,21,5,7,14]))
console.log(maiorNumero([7,9,5,7,14]))
console.log(maiorNumero([]))
console.log(maiorNumero([-1,2,-7]))


