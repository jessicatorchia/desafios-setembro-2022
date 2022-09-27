//imprimir um array que contenha todos os nomes de pessoa que começam com J

const entrada = ['ana','bia','jose','juju','jeje','carlos']


let pessoaComJ = entrada.filter((palavraAtual)=>{
    if(palavraAtual.indexOf('j')===0){
        palavraAtual = true
        return palavraAtual
    }
})

console.log(pessoaComJ)

