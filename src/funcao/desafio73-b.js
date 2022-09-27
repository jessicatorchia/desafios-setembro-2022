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

function animaisComO (obj){
    let animaisComLetraO = []

    for(let indiceAnimalAtual = 0;indiceAnimalAtual<obj.length; indiceAnimalAtual++){
        let animalAtual = obj[indiceAnimalAtual]
        let nomeAnimal = animalAtual.nome
    
        if(nomeAnimal.includes('o')){
            
            animaisComLetraO.push(animalAtual)
            
        }
    }
    return animaisComLetraO
} 



console.log(animaisComO(animais))

