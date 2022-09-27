// Receber uma palavra e falar se é um palindrome ou não  (palavras igual quando lidas de tras para frente)

function verificaPalindrome (stringNome){

    let palindromeSemEspaço = ''

    for(let i=0; i<stringNome.length; i++){
        if(stringNome[i] != ' '){
            palindromeSemEspaço = palindromeSemEspaço + stringNome[i]
        }
    }
         
    let expressao = true
    let palindromeTotal = palindromeSemEspaço.length-1 
    
    for(let i=0; i<palindromeSemEspaço.length/2; i++){
        
        if(palindromeSemEspaço[palindromeTotal-i] !== palindromeSemEspaço[i]){
            expressao = false
            break
        }        
    }
    if(expressao){
        return 'É Palindrome'
    }else{
        return 'Não é Palindrome'
    }
}




const palindrome = 
console.log(verificaPalindrome("ana"))
console.log(verificaPalindrome("subi no onibus"))
console.log(verificaPalindrome("araro"))
console.log(verificaPalindrome(""))

