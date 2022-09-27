
//criar uma função que retorna nota:
//entrada entrada em obj:

//  let jessica = {
//     acertou1: true,
//     acertou2: true
// }

// let afonso = {
//     acertou1: false,
//     acertou2: false
// }



function calculaNota (pessoa){    
    if(pessoa.acertou1 == true && pessoa.acertou2 == true){
        return 100
    }if((pessoa.acertou1 == true && pessoa.acertou2 == false) || (pessoa.acertou1 == false && pessoa.acertou2 == true )){
        return 50
    }
    if((pessoa.acertou1 == false && pessoa.acertou2 == false) ){
        return  0
    }
}

// function calculaNota2 (pessoa){              outra forma de fazer, mais simples
//     let n1 = Number(pessoa.acertou1)
//     let n2 = Number(pessoa.acertou2)
//     return ((n1+n2)/2)*100
// }


let jessica = {
    acertou1: true,
    acertou2: true
}

let afonso = {
    acertou1: false,
    acertou2: false
}

let nota = calculaNota2(jessica)
let nota2 = calculaNota(afonso)

console.log(nota)