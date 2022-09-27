// Recebe uma cor e imprime a proxima

const cores = ['vermelho', 'azul' ,'verde', 'amarelo', 'preto', 'branco']

function proxCor (cor){
       
    let proxCor = undefined

    
    for (let i=0; i<cores.length; i++){
      
        if(cor == cores[i]){
            proxCor = cores[i+1]
            return proxCor       
        }
              
    }
   
    return 
    
   
}






console.log(proxCor('azul'))
console.log(proxCor('vermelho'))
console.log(proxCor('verde'))
console.log(proxCor('branco'))
console.log(proxCor())
console.log(proxCor('lilas'))


