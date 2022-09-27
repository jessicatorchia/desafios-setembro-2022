// Recebe uma cor e imprime a anterior

const cores = ['vermelho', 'azul' ,'verde', 'amarelo', 'preto', 'branco']

function proxCor (cor){
    
    let corAnt = undefined
       
    for (let i=0; i<cores.length; i++){
        if(cores[i]== cor){
            corAnt = cores[i-1]
            return corAnt
        }
    }
     
    if(corAnt===undefined){
        return 
    }  
}

console.log(proxCor('azul'))
console.log(proxCor('vermelho'))
console.log(proxCor('verde'))
console.log(proxCor('branco'))
console.log(proxCor())
console.log(proxCor('lilas'))