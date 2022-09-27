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

console.log(JSON.stringify(animais))

let arrFiltro = []


for(let i =0; i<animais.length; i++){
    let animalAtual = animais[i]
    let tipoAnimal = animalAtual.tipo
    let idaedAnimal = animalAtual.idade
    if(idaedAnimal<=7) continue
    if((tipoAnimal == 'cachorro' || tipoAnimal == 'gato')){
        arrFiltro.push(animalAtual)
    }
}


console.log(arrFiltro)