// mapear o array de string frutas em um array de Obj. Frutas

function criaNovoObjcomNomeValorArray (nomes){
    let objFrutas = []

    for(let i =0; i<nomes.length; i++){
        let frutaAtual = nomes[i]
        
        objFrutas.push({nome:frutaAtual})
    } 
    
    for(let i =0; i<nomes.length; i++){
        let frutaAtual = nomes[i]
        let obj = {}
        obj.nome=frutaAtual
        
        objFrutas.push(obj)
    }
    return objFrutas
}

const frutas = ['uva', 'banana', 'morango', 'laranja', 'pera']

console.log(criaNovoObjcomNomeValorArray(frutas))