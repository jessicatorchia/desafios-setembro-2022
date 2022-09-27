// mapear o array de string frutas em um array de Obj. Frutas

const frutas = ['uva', 'banana', 'morango', 'laranja', 'pera']


let objFrutas = []


for(let i =0; i<frutas.length; i++){
    let frutaAtual = frutas[i]
    
    objFrutas.push({nome:frutaAtual})
}

console.log(objFrutas)


for(let i =0; i<frutas.length; i++){
    let frutaAtual = frutas[i]
    let obj = {}
    obj.nome=frutaAtual
    
    objFrutas.push(obj)
}

console.log(objFrutas)