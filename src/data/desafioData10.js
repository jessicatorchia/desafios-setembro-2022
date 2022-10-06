//receber uma data e cria um array com todos os dias do mês da entrada.

const dayjs = require("dayjs")

let entrada = dayjs("2024-02-04")

function retornaDiasdoMes (data){
    let primeiroDiaDoMes = data.startOf('month')
    let ultimoDiaDoMes = data.endOf('month')
    let primeiroDia = primeiroDiaDoMes.date()
    let ultimoDia = ultimoDiaDoMes.date()
    
    return [primeiroDia, ultimoDia]

  
   
}

console.log(retornaDiasdoMes(entrada))