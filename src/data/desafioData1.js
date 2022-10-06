//receber um array datas, criar função retorna a maior data

const dayjs = require("dayjs")

let entrada = [
    dayjs("2022-05-08"),
    dayjs("2021-04-02"),
    dayjs("1990-11-21"),
    dayjs("2020-04-30")
]

function retornaAMaior(data){
    let maior = data[0]
    
    for(let i=0;i<data.length; i++){
        let dataAtual = data[i]
        if(maior < dataAtual){
            maior = dataAtual
        }
    }
    return maior
} 

console.log(retornaAMaior(entrada))