
const cpf  = '14320027752'

const cpfArr = cpf.split('') //virou numero

let primeiros9Multiplicado = []

let primeiros10Multiplicado = []




for(let i = 0; i<9; i++){
    //primeiros9[primeiros9Multiplicado.length] = cpfArr[i]
    primeiros9Multiplicado.push(cpfArr[i]*(10-i))
}

// console.log(primeiros9Multiplicado)

    
// console.log(multiplicadorPrimeiros9)

let somaDos9multiplicados = 0

for(let i=0; i<primeiros9Multiplicado.length; i++){
    let numeroAtual = primeiros9Multiplicado[i]
    somaDos9multiplicados = somaDos9multiplicados + numeroAtual
}

// console.log(somaDos9multiplicados)


for(let i = 0; i<10; i++){
   
    primeiros10Multiplicado.push(cpfArr[i]*(11-i))
}

let somaDos10multiplicados = 0

for(let i=0; i<primeiros10Multiplicado.length; i++){
    let numeroAtual = primeiros10Multiplicado[i]
    somaDos10multiplicados = somaDos10multiplicados + numeroAtual
}




if(((somaDos9multiplicados*10) % 11 == cpfArr[9]) && ((somaDos10multiplicados *10) % 11 == cpfArr[10])){ 
    console.log("CPF válido")
}else{
    console.log("CPF inválido")
}

