//receber um array datas, retorna a segunda menor data do array

const dayjs = require("dayjs")

let entrada = [
    dayjs("2022-09-04"),
    dayjs("2022-09-12"),
    dayjs("2022-09-19"),
    dayjs("2022-09-26")
]

function retornaAMenor(data) {
    let menor = data[0]
    let menorIndice = 0

    for (let i = 0; i < data.length; i++) {
        let dataAtual = data[i]
        if (menor > dataAtual) {
            menorIndice = i
            menor = dataAtual
        }
    }
    return menorIndice
}

function descobreASegundaMenorData(datas) {
    let menorIndice = retornaAMenor(datas)
    let acumuladorMenor = Number.MAX_VALUE

    for (let i = 0; i < datas.length; i++) {
        if (i === menorIndice) {
            continue
        }
        let dataAtual = datas[i]

        if (dataAtual < acumuladorMenor) {
            acumuladorMenor = dataAtual
        }
    }
    return acumuladorMenor
}

console.log(descobreASegundaMenorData(entrada))