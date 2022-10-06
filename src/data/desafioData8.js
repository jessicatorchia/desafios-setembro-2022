//receber um array datas, encontrar uma data no array datas e imprimir a prox

const dayjs = require("dayjs")

let entrada = [
    dayjs("2022-09-04"),
    dayjs("2022-09-12"),
    dayjs("2022-09-19"),
    dayjs("2022-09-26")
]

let dataParaEncontrar = dayjs("2022-09-19").format('DD/MM/YYYY')

function imprimirAProx (datas,dataParaEncontrarProx){
    
    for(let i=0; i<datas.length; i++){

        let dataAtual = datas[i].format('DD/MM/YYYY') 

        if(dataAtual=== dataParaEncontrarProx){
            return datas[i+1]
        }

    }
}

console.log(imprimirAProx(entrada,dataParaEncontrar))