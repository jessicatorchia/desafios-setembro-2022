//imprimir um array que contenha todos os nomes de pessoa que começam com J

function pessoaComJ (strigNomes){

    let arrComJ = []

    for(let i = 0; i<strigNomes.length; i++){
        let palavraAtual = strigNomes[i]
        if(palavraAtual.indexOf('j')===0){  //o indexOf retorna a posição da letra que a gente pergunta, caso seja a posição zero, então a palavra começa com a letra
            arrComJ.push(palavraAtual)
        }
    }
    return arrComJ
}

console.log(pessoaComJ(['ana','bia','jose','juju','jeje','carlos']))

