//receber um array datas, filtrar as datas em que o ano for 2022

const dayjs = require("dayjs")

let entrada = [
    dayjs("2022-05-08"),
    dayjs("2021-04-02"),
    dayjs("2022-11-21"),
    dayjs("2020-04-30")
]

let datas2022 = entrada.filter((dataAtual)=>{
    if(dataAtual.year()===2022)
    return true
})

console.log(datas2022)
