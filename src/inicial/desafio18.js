// Recebe uma cor e imprime a anterior


const cores = ['vermelho', 'azul' ,'verde', 'amarelo', 'preto', 'branco']


let entrada = 'verde'
let corAnt = undefined


for (let i=0; i<cores.length; i++){
    if(cores[i]== entrada){
        corAnt = cores[i-1]
    }
}


if(corAnt===undefined){
    corAnt = 'n tem anterior'
}


console.log(corAnt)