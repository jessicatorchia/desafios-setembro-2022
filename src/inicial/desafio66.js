// entrada objeto, imprimir todos os valores (values) que possuem valor '0' no nome


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

let arr = Object.values(pessoa1)

console.log(arr)

let arrLetraO = []



for(let i=0; i<arr.length; i++){
    let palavraAtual = arr[i].toString()
    
    if(palavraAtual.indexOf('0') != -1){            
        arrLetraO.push(palavraAtual)
            
            
    }
}

  
console.log(arrLetraO)


/*Aprendi que o indexOf procura somente strings, caso o tenha algum numero, dá erro, então é preciso passar para string
usando o .toString() no valor que queremos passar para string, caso o valor do array já seja uma string, não vai acontecer alteração.
*/