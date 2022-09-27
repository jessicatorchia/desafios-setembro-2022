// Imprimir o maior número fazer uma função

//pegar o primeiro numero do arry e comparar com o segundo, etc e guardar o valor
//após imprimor no terminal o resultado


const arrEntrada = [7,9,21,5,7,14]

let maiorNumero = arrEntrada.reduce((acumulador, numeroAtual)=>{
    let maiorNumero = acumulador

    if(numeroAtual >= maiorNumero){
        maiorNumero = numeroAtual
    }
    return maiorNumero
},0)



console.log(maiorNumero)


