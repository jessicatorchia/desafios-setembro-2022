//Ler o nome de uma mercadoria e seu valor e imprimir produto:mercadoria; preço:valor; preço à vista: valor - 10%



const entrada = 'banana, 5'

let arrEntrada = entrada.split(',')



let arrSaida = []


if(arrEntrada[0]){
    arrEntrada[0] = ('produto:' + arrEntrada[0])
    arrSaida.push(arrEntrada[0])
}
if(arrEntrada[1]){
    arrEntrada[1] = 'valor:' + arrEntrada[1] + ' reais\nvalor à vista c/ 10%: ' + (Number(arrEntrada[1]) * 0.90) +' reais'
    arrSaida.push(arrEntrada[1])
}
    


console.log(arrSaida.join('\n'))


//Aprendi que o \n serve para quebrar linhas quando vai imprimir