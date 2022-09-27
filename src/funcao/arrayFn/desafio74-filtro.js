//Filtrar em um novo array que os nomes comecem com a letra 'l'
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

let animaisComL = animais.filter((animalAtual)=>{
    if(animalAtual.nome[0] =='l'|| animalAtual.nome[0] == 'L'){
        return true
    }
})



console.log(animaisComL)


