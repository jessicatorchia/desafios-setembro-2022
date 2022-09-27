//filtrar todos os animais que tenha letra 'o' no nome

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
        nome: 'lepe',
        tipo: 'passaro',
        cor: 'azul',
        idade: 4,
    }
]

 
let animaisComLetraO = []



for(let indiceAnimalAtual = 0;indiceAnimalAtual<animais.length; indiceAnimalAtual++){
    let animalAtual = animais[indiceAnimalAtual]
    let nomeAnimal = animalAtual.nome

    if(nomeAnimal.includes('o')){
        
        
        animaisComLetraO.push(animalAtual)
        
    }
}


console.log(animais2)

