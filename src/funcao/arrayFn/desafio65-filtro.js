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

let chavesComLetraO = arr.filter((chavesAtual)=>{
    if(chavesAtual.indexOf('o') != -1){
        return true
    } 
})


console.log(chavesComLetraO)



