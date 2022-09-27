// inverter o array sem usar inverse (dica: usar for e posições)


function inverterArray (numeros){
    if(numeros.length == 0){
        return
    }

    let arrInverso = []

    for(i = (numeros.length - 1); i >= 0; i--){
        let numeroAtual = numeros[i]
        arrInverso[arrInverso.length] = numeroAtual
    } 
    return arrInverso
}


console.log(inverterArray([5,4,3,2,1]))


