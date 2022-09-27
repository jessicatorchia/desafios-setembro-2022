//Calcular a media de idade dos animais


const animais = [
    {
        nome: 'bob',
        tipo: 'gato',
        cor: 'mesclado',
        idade: 7
    },
    {
        nome: 'lindona',
        tipo: 'gato',
        cor: 'cinza',
        idade: 12,
    },
    {
        nome: 'mel',
        tipo: 'cachorro',
        cor: 'castanho',
        idade: 8,
    },
    {
        nome: 'dog',
        tipo: 'cachorro',
        cor: 'branco',
        idade: 1,
    },
    {
        nome: 'pepe',
        tipo: 'passaro',
        cor: 'azul',
        idade: 4,
    }
]

let mediaIdadeAnimais = animais.reduce((acumulador, animalAtual)=>{
    return acumulador + animalAtual.idade

},0)/ animais.length


console.log(mediaIdadeAnimais)