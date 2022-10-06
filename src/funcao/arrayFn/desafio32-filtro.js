//Recebe um array  e quebra e 2 partes grando um novo array

const entrada = ['a','b','c','d','e']

let metadeArr2 = entrada.filter((letraAtual,i)=>{
    
    if(i>=(entrada.length/2)){
        
        return true
    }
})

let metadeArr1 = entrada.filter((letraAtual,i)=>{
    if(i<=(entrada.length/2)){
        
        return true
    }
  
})

console.log(metadeArr1)

console.log(metadeArr2)



