//Recebe uma palavra e conta quantos caracteres tem sem contar os espaços em branco


function contaCaracteresSemEspaco (stringNome){

    let contaCaracteres = 0

    for(let i = 0; i<stringNome.length; i++){
        let letraAtual = stringNome[i]
        if(letraAtual !== ' '){ 
            contaCaracteres = contaCaracteres + 1
        }
        
    }
    return contaCaracteres
}


console.log(contaCaracteresSemEspaco('Jessica Barros Torchia   '))
console.log(contaCaracteresSemEspaco('  '))