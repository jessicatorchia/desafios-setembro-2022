//Imprimir o menor número em uma função

const arrEntrada = [7,9,2,5,7]

let menorNumero = arrEntrada.reduce((acumulador,numeroAtual)=>{
    
    if(numeroAtual < acumulador){
        acumulador = numeroAtual
    }   
    return acumulador
},arrEntrada[0])


console.log(menorNumero)