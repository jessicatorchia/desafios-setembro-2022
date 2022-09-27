// recebe uma frase string, em todas as palavras maçã, substituir por banana

const frase = 'A maçã é boa, eu gosto de maçã'

let array = frase.split(' ')

// console.log(array)

let fraseNova = []



let palavraNova = 'banana'

for(let i = 0; i<array.length; i++){
    let palavraAtual = array[i]
    if(palavraAtual == "maçã"){
        palavraAtual == palavraNova
        fraseNova.push(palavraNova)
    }else{
        fraseNova.push(palavraAtual)
    }
}

let fraseNovaString = fraseNova.join(' ')

console.log(fraseNovaString)















