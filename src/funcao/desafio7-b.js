// Imprimir a multiplicação de todos por todos, fazer em função


function multiplicaTodos (arrNumeros){
    if(arrNumeros.length ==0){
        return undefined
    }
    let total = 1

    for (let i =0; i< arrNumeros.length; i++){
        let numeroAtual = (arrNumeros[i])
        total = total * numeroAtual
    }
    return total
}




console.log(multiplicaTodos([7,2, 2]))
console.log(multiplicaTodos([]))
console.log(multiplicaTodos([7,2,-1]))



