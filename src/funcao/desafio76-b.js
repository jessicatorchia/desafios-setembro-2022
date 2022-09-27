//fazer um novo Obj(chave, valor) somente com os tipos do obj animais

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

function retornaNomeAnimalMaiusc (obj){
    let arrTipos = []


    for(let i =0; i<obj.length; i++){
        arrTipos.push(obj[i].nome.toUpperCase())
    }
    return arrTipos
}


console.log(retornaNomeAnimalMaiusc(animais))
