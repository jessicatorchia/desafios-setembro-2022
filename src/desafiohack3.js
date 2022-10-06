
function transformaHora (horaStr){

    let entradaNumero = horaStr.split(':')

    let arrPosicaoZeroUm = []
    
    arrPosicaoZeroUm.push(entradaNumero[0])
    arrPosicaoZeroUm.push(entradaNumero[1])
    
    let arrPosicaoDois = []
    let primeiros = entradaNumero[2].substr(0, 2)
    arrPosicaoDois.push(primeiros)
    let ultimos = entradaNumero[2].substr(2)
    arrPosicaoDois.push(ultimos)
    
    let arrStrTotal = arrPosicaoZeroUm.concat(arrPosicaoDois)
    
    let saida = []
    
    let horaAtual = Number(arrStrTotal[0])
    let minutoAtual = Number(arrStrTotal[1])
    let segundoAtual = Number(arrStrTotal[2])
    let AMPM = arrStrTotal[3]
    
    if(AMPM === "AM" && (horaAtual == 12)){
        horaAtual = 00
        saida.push(
            horaAtual.toString().padStart(2, "0"),
            minutoAtual.toString().padStart(2, "0"),
            segundoAtual.toString().padStart(2, "0")
        )
    }else if(AMPM === "PM" && (horaAtual == 12)){
        horaAtual = 12
        saida.push(
            horaAtual.toString().padStart(2, "0"),
            minutoAtual.toString().padStart(2, "0"),
            segundoAtual.toString().padStart(2, "0")
        )
    }else if (AMPM === "PM" && (horaAtual >= 01 && horaAtual < 12)) {
    
        saida.push(
            (horaAtual + 12).toString().padStart(2, "0"),
            minutoAtual.toString().padStart(2, "0"),
            segundoAtual.toString().padStart(2, "0")
        )
    } else {
        saida.push(
            horaAtual.toString().padStart(2, "0"),
            minutoAtual.toString().padStart(2, "0"),
            segundoAtual.toString().padStart(2, "0")
        )
    }
    return saida.join(':')
}

console.log(transformaHora('12:00:00AM'))



