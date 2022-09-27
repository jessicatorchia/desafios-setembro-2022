//Ler o nome de uma mercadoria e seu valor e imprimir produto:mercadoria; preço:valor; preço à vista: valor - 10%



const entrada = {produto:'banana',preco:5}

let desc = 'valor à vista c/ 10%: '+ entrada['preco'] * 0.90 + ' reais'




console.log('Produto:' + entrada['produto'])
console.log('Valor:' + entrada['preco']+ ' reais')
console.log(desc)


