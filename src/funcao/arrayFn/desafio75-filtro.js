//Filtrar em um novo array todos os animais cachorros ou gato com idade maior que 7
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
        nome: 'Lepe',
        tipo: 'passaro',
        cor: 'azul',
        idade: 4,
    }
]

let cachorroGatoIdadeMaior7 = animais.filter((animalAtual)=>{
    if(animalAtual.idade <=7 && (animalAtual.tipo == 'cachorro' || animalAtual.tipo == 'gato')){
        return true
    }
})


console.log(cachorroGatoIdadeMaior7)