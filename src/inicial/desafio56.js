//Receber uma palavra e montar um aray com o valor da posição do UTF-8 (usar array)

const entrada = 'jessica'

let strCod = ''

for(let i = 0; i<entrada.length; i++){
    let letraAtual = entrada.charCodeAt(i)
    strCod = strCod + Number(letraAtual) + ' '  
}

let arrCod = strCod.split(' ')

let arrCodCerto = []

for(let i = 0; i<arrCod.length; i++){
    if(arrCod[i] != ''){
        arrCodCerto.push(arrCod[i])
    }
}

console.log(arrCodCerto)


