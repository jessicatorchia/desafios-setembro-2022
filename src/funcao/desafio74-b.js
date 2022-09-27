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

function filtraAnimalComLetraL (obj){
    let arrSaidaAnimaisLetraL = []

    for(let i=0; i<obj.length; i++ ){
        let animalAtual = obj[i]                      //esse é um item do array, é um conjunto de chaves dentro de uma chave
        let nomeAnimal = animalAtual.nome                 // esse é o valor da chave nome    
        
        
        if(nomeAnimal[0] == 'l' || nomeAnimal[0] == 'L'){  //não precisou colocar nomeAnimalL[i][0] pois peguei a variavel dele, faltou apenas a posição [0], inicial
            
            arrSaidaAnimaisLetraL.push(animalAtual)
            
        }
    }
    return arrSaidaAnimaisLetraL
    
}

console.log(filtraAnimalComLetraL(animais))


