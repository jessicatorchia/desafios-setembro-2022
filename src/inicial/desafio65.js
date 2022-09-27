// entrada objeto, imprimir todos as chaves (keys) que possuem letra 'o' no nome


const pessoa1 = {
    nome:'jessica barros torchia',
    nomeMae: 'janaina',
    nomePai: 'julio',
    sexo:'f', 
    idade: 30,
    altura: 1.65,
    peso: 62,
    manequim: 42,
    calcado: 35,
    rua: 'Anibal Couto',
    num: '56',
    bairro: 'Santa Rosa',
    cidade: 'Barra Mansa',
    corCasa: 'branca',
    cep: '27323130',
    profissao: 'aprendiz de desenvolvimento',
    escolaridade: 'Superior Completo',
    hobbie: 'bike',
    bebida: 'vinho',
    carro: 'palio',
}


let arr = Object.keys(pessoa1)

// console.log(arr)

let arrLetraO = []



for(let i=0; i<arr.length; i++){
    let palavraAtual = arr[i]
    
    if(palavraAtual.indexOf('o') != -1){            
        arrLetraO.push(palavraAtual)
            
            
    }
}

  
console.log(arrLetraO)


/*Aprendi que veriavel.indexOf('letra') procura uma letra na string e devolve o valor de -1 caso não encontrado
assim consigo filtrar palavras que contenham a letra
*/


