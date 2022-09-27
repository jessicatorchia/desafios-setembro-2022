// converter valores do array para fahrenheit colocando em um novo array


function conversaoFanrenheit (numerosTC){
    if(numerosTC.length == 0){
        return
    }
    arrayConversao = []

    for(let i=0; i< numerosTC.length; i++){
        let numeroAtual = numerosTC[i]
        numeroAtual = (numeroAtual * 1.8) + 32
        arrayConversao[arrayConversao.length] = numeroAtual
    }
    
    return arrayConversao
}


console.log(conversaoFanrenheit([30, 35, 40, 60]))
console.log(conversaoFanrenheit([]))