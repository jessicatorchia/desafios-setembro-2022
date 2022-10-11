// entrada de um array com caracteres e uma quantidade para avançar os caracteres no afabeto utf-8

let fraseEntrada = 'Show da Xuxa'



let andadorDeLetra = 3

let fraseSaida = ''

for(let i = 0; i<fraseEntrada.length; i++){
    let codLetraAtual = fraseEntrada.charCodeAt(i)
    let novoCodLetra = codLetraAtual
    
    if(codLetraAtual >= 65 && codLetraAtual <=90) {
        novoCodLetra=novoCodLetra+andadorDeLetra
        if(novoCodLetra > 90 ){
            novoCodLetra = 65 + (novoCodLetra - 90)-1
        }
    } else if ( codLetraAtual >= 97 && codLetraAtual <= 122){
        novoCodLetra=novoCodLetra+andadorDeLetra
        if(novoCodLetra >122 ){
            novoCodLetra = 97 + (novoCodLetra - 122)-1
        }
    } 
    let letraAvancada = String.fromCharCode(novoCodLetra)
    fraseSaida=fraseSaida+letraAvancada    
}


console.log(fraseSaida)




// for(let i = 0; i<fraseEntrada.length; i++){
    
//     let letraAtual = fraseEntrada[i]
//     let codLetraAtual = fraseEntrada.charCodeAt(i) + andadorDeLetra
//     let letraAvancada = String.fromCharCode(codLetraAtual)

//     if(codLetraAtual === 90 ){
//         letraAvancada = 65 + (andadorDeLetra ) 
//         fraseSaida = fraseSaida +  String.fromCharCode(letraAvancada) 
//     }
//     if(codLetraAtual === 122){
//         letraAvancada = 97 + (andadorDeLetra ) 
//         fraseSaida = fraseSaida + String.fromCharCode(letraAvancada )
//     }
//     if((codLetraAtual >= 65 && codLetraAtual <90) || ( codLetraAtual >= 97 && codLetraAtual < 122)){

//         fraseSaida = fraseSaida + letraAvancada 
//     }else{
//         fraseSaida = fraseSaida + letraAtual
//     }
    
// }


// console.log(fraseSaida)



