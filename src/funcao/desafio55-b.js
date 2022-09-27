//Recebe uma string e imprime a prox letra de cada letra conforme o caracter UTF-8

//se espera kfttjdb


function retornaProxLetraUTF8 (stringNome){
    let strUTF = ''

    for(let i = 0; i<stringNome.length; i++){
        let codletraastual = stringNome.charCodeAt(i)
        let letraAtual = String.fromCharCode(codletraastual + 1)
        strUTF = strUTF + letraAtual
      
    }
    return strUTF
}

console.log(retornaProxLetraUTF8('jessica'))


