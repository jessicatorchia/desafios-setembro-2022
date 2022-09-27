//criar uma função que retorna nota:
//entrada em array:

// let acertos1 = [true, true, true, true] // => 100
// let acertos2 = [true, true, false, false] // => 50
// let acertos3 = [false, false, false, false] // => 0
// let acertos4 = [true, true] // => 100


let acertos1 = [true, true, true, true] // => 100
let acertos2 = [true, true, false, false] // => 50
let acertos3 = [false, false, false, false] // => 0
let acertos4 = [true, true] // => 100

function calculaNota (acertos){

    let contadorTrue = 0
    let totalQuestoes

    for(let i = 0; i<acertos.length; i ++){
        totalQuestoes = acertos.length

        if(acertos[i]){
            contadorTrue = contadorTrue + 1 
        }        
    }
    return ((contadorTrue/totalQuestoes)*100)
    
}

console.log(calculaNota(acertos1))
console.log(calculaNota(acertos2))
console.log(calculaNota(acertos3))
console.log(calculaNota(acertos4))
