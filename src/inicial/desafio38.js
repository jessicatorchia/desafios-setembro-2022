//imprimir um array que contenha todos os nomes de pessoa que começam com J

const arr = ['ana','bia','jose','juju','jeje','carlos']




let arrComJ = []

for(let i = 0; i<arr.length; i++){
    let palavraAtual = arr[i]
    if(palavraAtual.indexOf('j')===0){  //o indexOf retorna a posição da letra que a gente pergunta, caso seja a posição zero, então a palavra começa com a letra
        arrComJ.push(palavraAtual)
    }
}

console.log(arrComJ)


/*Aprendi que indexOf retorna a posição da letra que a gente pergunta
*/

