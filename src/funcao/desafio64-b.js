//criar 3 objetos de pessoas com 20 itens de dados e imprimir as pessoas maiores de 18 anos


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

const pessoa2 = {
    nome:'joao alberto ribas',
    nomeMae: 'vania',
    nomePai: 'josé',
    sexo:'m', 
    idade: 45,
    altura: 1.40,
    peso: 89,
    manequim: 50,
    calcado: 42,
    rua: 'AAA',
    num: '561',
    bairro: 'vila santa cecilia',
    cidade: 'volta redonda',
    corCasa: 'azul',
    cep: '27000123',
    profissao: 'empresario',
    escolaridade: 'Superior incompleto',
    hobbie: 'natacao',
    bebida: 'cafe',
    carro: 'hb20',
}

const pessoa3 = {
    nome:'antonio sergio de araujo',
    nomeMae: 'tatiana',
    nomePai: 'joao',
    sexo:'m', 
    idade: 15,
    altura: 1.70,
    peso: 70,
    manequim: 44,
    calcado: 42,
    rua: 'bbb',
    num: '11',
    bairro: 'sao joao',
    cidade: 'volta redonda',
    corCasa: 'verde',
    cep: '27000111',
    profissao: 'estudante',
    escolaridade: 'ensino médio incompleto',
    hobbie: 'futebol',
    bebida: 'refrigerante',
    carro: '',
}


function verificaMaiorDeIdade (pessoa){



    if(pessoa.idade >= 18){
        return (pessoa.nome)
    }
}  

console.log(verificaMaiorDeIdade(pessoa1))
console.log(verificaMaiorDeIdade(pessoa2))
console.log(verificaMaiorDeIdade(pessoa3))




