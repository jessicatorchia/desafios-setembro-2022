//receber um array datas, retornar todas as datas 10 dias a frente

const dayjs = require("dayjs")

let entrada = [
    dayjs("2022-05-08"),
    dayjs("2021-04-02"),
    dayjs("2022-11-21"),
    dayjs("2020-04-30")
]

let data10diasMais = entrada.map((dataAtual)=> dataAtual.add(10,'day'))


console.log(data10diasMais)
