//receber uma string e contar quantidade de letras 'a' dentro da string palavra (fazer sem array)


function contaLetraA (stringNome){

    let contaA = 0

    stringNome.forEach ((stringAtual)=>{
        if(stringAtual=='a'){
            contaA = contaA +1
        }
    })
  
    return contaA
}


console.log(contaLetraA('abcaaddjjah aaaa'))

