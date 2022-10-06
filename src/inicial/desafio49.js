//receber uma string e contar quantidade de letras 'a' dentro da string palavra (fazer sem array)

const string = 'abcaaddjjah aaaa'


let contaA = 0


for(i=0; i<string.length;i++){
    if(string[i]== 'a'){
        contaA = contaA + 1
    }    
}

console.log(contaA)


/* aprendi que o for conta não só Arrays, mas conta também uma string unica, sem eu precisar transformar ela em array para procurar uma letra por ex
*/