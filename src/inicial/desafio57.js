//Ler uma string e converter para maiúsculo a string toda, sem usar toUpperCase

const str = 'Jessica BarRos Torchia'


let strUTF = ''


for(let i = 0; i<str.length; i++){
    let letraAtual = str[i]
    let codletraastual = str.charCodeAt(i)
    let espaço = (' ')
    if(str[i] == espaço){
        strUTF = strUTF + letraAtual
    }
    if(codletraastual >=97 && codletraastual <=122){
        let letraAtual = String.fromCharCode(codletraastual - 32)
        strUTF = strUTF + letraAtual  
    }
    if(codletraastual >=65 && codletraastual <=90){
        let letraAtual = str[i]
        strUTF = strUTF + letraAtual
    }  
    
}

console.log(strUTF)



/* foi preciso olhar a tabela do codigo UTF-8 e ver os codigos equivalentes as letras maiusculas e minusculas para que pudesse colocar 
as condições no cod.
*/




// for(let i = 0; i<str.length; i++){
//     let codletraastual = str.charCodeAt(i)
    
//     strUTF = strUTF + ' '+ codletraastual
    
// }

// console.log(strUTF)
