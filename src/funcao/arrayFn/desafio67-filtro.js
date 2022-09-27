//obj imprimir a chave e valor de todaos os atributos que o valor>30

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


const chaves = Object.keys(pessoa1)

const valores = Object.values(pessoa1)

let chaveValorMaior30 = valores.filter((valorAtual)=>{
    if(Number.isInteger(valorAtual) == true && valorAtual > 30){
       return true
    }
    
})


console.log(chaveValorMaior30)
