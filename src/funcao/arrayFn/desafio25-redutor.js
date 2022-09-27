// calcular a média dos números de array.

const arrEntrada = [7,9,2,5,7,4]

let mediaArray = arrEntrada.reduce((acumulador, numeroAtual)=>{
  
    return numeroAtual+acumulador

   
},0) / arrEntrada.length

console.log(mediaArray)


/*aprendi que para fazer a media com reduce, eu preciso primeiramente na
propia função, realizar a somaDosNumeros, após a função coloco a divisao que irá 
pegar o retorno da função e dividir.
*/