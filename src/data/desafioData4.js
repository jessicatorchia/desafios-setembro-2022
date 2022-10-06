//receber um array datas, retornar a terceira data de um array

const dayjs = require("dayjs")


let entrada = [
    dayjs("2022-05-08"),
    dayjs("2021-04-02"),
    dayjs("2022-11-21"),
    dayjs("2020-04-30")
]


function pegaposicao3 (data){
    return data[2]
}
console.log(pegaposicao3(entrada))







