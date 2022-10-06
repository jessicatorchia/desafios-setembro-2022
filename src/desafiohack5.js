


function quebraStr (str){
    let ooo = []
    let x = str.split('\n')

    for(let i=0;i<x.length;i++){
        let pedaco = x[i]
        let y = pedaco.split('')
        let z = y.map(atual=>{
            return Number(atual)
        })
        ooo.push(z)
    }
    return ooo
}


function pegaDiagonais (numeros){
    let somadiagoInicio = []
    for (let i = 0; i < numeros.length; i++) {
        let numeroAtual = numeros[i][i]
        if (numeroAtual) {
            somadiagoInicio.push(numeroAtual)
        }
    }
   
    let somaDiagoFinal = []
    for (let i = 0; i < numeros.length; i++) {
        let numeroAtual = numeros[i][(numeros.length-1)- i]
    
        if (numeroAtual) {
            somaDiagoFinal.push(numeroAtual)
        }
    }

    let soma1 = somadiagoInicio.reduce((acumulador, numeroAtual)=>{
        return acumulador + numeroAtual
    },0)
    
    let soma2 = somaDiagoFinal.reduce((acumulador, numeroAtual)=>{
        return acumulador + numeroAtual
    },0)
    
    return Math.abs(soma1 - soma2)
}


function final (str){
    let quebrado = quebraStr(str)
    console.log(quebrado)
    return pegaDiagonais(quebrado)
}

let entrada = '129\n456\n789'
console.log(final(entrada))




// let entrada = [
//     [1, 2, 3],
//     [4, 1, 1],
//     [7, 1, 2],
//     
// ]

// function pegaDiagonais (numeros){

//     let somadiagoInicio = []
//     for (let i = 0; i < numeros.length; i++) {
//         let numeroAtual = numeros[i][i]
//         if (numeroAtual) {
//             somadiagoInicio.push(numeroAtual)
//         }
//     }
   
//     let somaDiagoFinal = []
//     for (let i = 0; i < numeros.length; i++) {
//         let numeroAtual = numeros[i][(numeros.length-1)- i]
    
//         if (numeroAtual) {
//             somaDiagoFinal.push(numeroAtual)
//         }
//     }

//     let soma1 = somadiagoInicio.reduce((acumulador, numeroAtual)=>{
//         return acumulador + numeroAtual
//     },0)
    
//     let soma2 = somaDiagoFinal.reduce((acumulador, numeroAtual)=>{
//         return acumulador + numeroAtual
//     },0)
    
//     return soma1 - soma2
// }


// console.log(pegaDiagonais(entrada))

