//receber um array de datas e retorna quantos anos se passaram de cada data da data atual em anos
const dayjs = require("dayjs")

let entrada = [
    dayjs("1991-05-08"),
    dayjs("2021-04-02"),
    dayjs("1990-11-21"),
    dayjs("2020-04-30")
]

function verificadorMaiorIdade (data){
    
    let hoje = dayjs()
    let arrSaida = []     
    for(let i=0; i<data.length; i++){
        let dataAtual = data[i]

        let anos = hoje.diff(dataAtual, 'year')
        if(anos >= 18){
            arrSaida.push(anos + " É Maior de idade")
        }else{
            arrSaida.push(anos + " Menor de idade")
        }      
    }
    return arrSaida
}


console.log(verificadorMaiorIdade(entrada))