//receber um array datas, retornar a posição de uma data no array

const dayjs = require("dayjs")

let entrada = [
    dayjs("2022-05-08"),
    dayjs("2021-04-02"),
    dayjs("2022-11-21"),
    dayjs("2020-04-30")
]

let dataParaEncontrar = dayjs("2022-11-21")

function retornaPosicaoMes11 (datas, dataParaEncontrar){
    
    for(let i=0; i<datas.length; i++){
        
        let dataAtual = datas[i]        
        if((dataAtual - dataParaEncontrar) === 0){
            return "Posição: " + i           
        } 
          
    }   
         
}



console.log(retornaPosicaoMes11(entrada,dataParaEncontrar))
