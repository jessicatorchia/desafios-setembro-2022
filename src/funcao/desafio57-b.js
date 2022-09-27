//Ler uma string e converter para maiúsculo a string toda, sem usar toUpperCase


function converterMaiuscula (stringNome){
    
    let strUTF = ''

    for(let i = 0; i<stringNome.length; i++){
        let letraAtual = stringNome[i]
        let codletraastual = stringNome.charCodeAt(i)
        let espaço = (' ')
        if(stringNome[i] == espaço){
            strUTF = strUTF + letraAtual
        }
        if(codletraastual >=97 && codletraastual <=122){
            let letraAtual = String.fromCharCode(codletraastual - 32)
            strUTF = strUTF + letraAtual  
        }
        if(codletraastual >=65 && codletraastual <=90){
            let letraAtual = stringNome[i]
            strUTF = strUTF + letraAtual
        }  
        
    }
    return strUTF
}


console.log(converterMaiuscula('Jessica BarRos Torchia'))


