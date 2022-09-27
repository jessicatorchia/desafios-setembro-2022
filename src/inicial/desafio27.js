// receber um numero, e imprimir se é primo ou não


let entrada = 21

let primo = true

for(let i = 2; i<entrada; i++){
    
    if(entrada % i ===0){
        primo = false
        break
        
    }
    
}



if(primo ==false){
    console.log(entrada + " Não é primo")
}
if(primo == true){
    console.log(entrada + " É primo")
}

/* Aprendi que posso atribuir em uma variavel true ou false e testar em um if
além de poder parar o if no for quando atingir a condição esperada ou inesperada
com o break.
é possivel com a utilização do for, fazer operações sem arrays, como o exempli que
percorreu um laço dos valores menores da entrada.
Sempre que for percorrer numeros, usar FOR
*/





