// Receber uma palavra e falar se é um palindrome ou não  (palavras igual quando lidas de tras para frente)

const palindrome = "ana"


let palindromeSemEspaço = ''

for(let i=0; i<palindrome.length; i++){
    if(palindrome[i] != ' '){
        palindromeSemEspaço = palindromeSemEspaço + palindrome[i]
    }
}

console.log(palindromeSemEspaço)

let expressao = true
let palindromeTotal = palindromeSemEspaço.length-1 

for(let i=0; i<palindromeSemEspaço.length/2; i++){
    
    if(palindromeSemEspaço[palindromeTotal-i] !== palindromeSemEspaço[i]){
        expressao = false
        break
    }
    
}



console.log(expressao)

