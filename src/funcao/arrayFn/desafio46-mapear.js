// recebe uma frase string, em todas as palavras maçã, substituir por banana

const str = 'A maçã é boa, eu gosto de maçã'

let arrNome = str.split(' ')

const substituirPalavra = arrNome.map((palavraAtual)=> {
    let palavraNova = 'banana'
    if(palavraAtual == 'maçã'){
        palavraAtual = palavraNova
    }else{
        palavraAtual = palavraAtual
    }
    return palavraAtual
})

console.log(substituirPalavra.join(' '))

/*quando a função arrow function não é direta, ou seja, é necessario atribuir outras variaveis e
fazer outras operações para que ela seja executada, entao preciso usar chaves, dar um enter
escrever as condiçoes abaixo e dar o retorno da função
*/













