//Recebe uma palavra e conta quantos caracteres tem sem contar os espaços em branco

const string = 'Jessica Barros Torchia   '

let contaCaracteres = 0



for(let i = 0; i<string.length; i++){
    let letraAtual = string[i]
    if(letraAtual !== ' '){ 
        contaCaracteres = contaCaracteres + 1
    }
    
}

console.log(contaCaracteres)