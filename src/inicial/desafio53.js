//Recebe uma palavra e calcula quantidade de vogais

let fs = require('fs')

const string = fs.readFileSync('./tcc.txt', 'utf-8')

let stringVogais = 0



for(let i = 0; i<string.length; i++){
  //  for(let j = 0; j<string.length; j++){
    let letraAtual = string[i]
    //if(letraAtual == 'a'|| letraAtual == 'e' || letraAtual == 'i'|| letraAtual == 'o' || letraAtual == 'u'){
        letraAtual = 1
        stringVogais = stringVogais + letraAtual
   // }
//}
}

console.log(stringVogais)





