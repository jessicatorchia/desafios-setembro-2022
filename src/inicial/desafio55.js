//Recebe uma string e imprime a prox letra de cada letra conforme o caracter UTF-8

const str = 'jessica'

//se espera kfttjdb

let strUTF = ''


for(let i = 0; i<str.length; i++){
    let codletraastual = str.charCodeAt(i)
    let letraAtual = String.fromCharCode(codletraastual + 1)
    strUTF = strUTF + letraAtual
  
}

console.log(strUTF)


