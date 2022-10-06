//receber um array datas, retornar todas as datas que forem dia par
const dayjs = require("dayjs")

let entrada = [
    dayjs("2022-09-04"),
    dayjs("2022-09-12"),
    dayjs("2022-09-19"),
    dayjs("2022-09-26")
]

let dataPar = entrada.filter((dataAtual)=>{
    if(dataAtual.date() % 2 === 0){
        return true
    }
})

console.log(dataPar)
