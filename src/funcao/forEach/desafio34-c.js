
function validaCPF (cpfstrings){

    const cpfArr = cpfstrings.split('') //virou numero
    // if(cpfArr.length != 11){
    //     return 'numero incompleto'
    // }

    let primeiros9Multiplicado = []
    
    let primeiros10Multiplicado = []
       
    for(let i = 0; i<9; i++){
        //primeiros9[primeiros9Multiplicado.length] = cpfArr[i]
        primeiros9Multiplicado.push(cpfArr[i]*(10-i))
    }
    
    // console.log(primeiros9Multiplicado)
            
    // console.log(multiplicadorPrimeiros9)
    
    let somaDos9multiplicados = 0
    
    primeiros9Multiplicado.forEach ((numeroAtual)=>{
        somaDos9multiplicados = somaDos9multiplicados + numeroAtual
    })
  
    // console.log(somaDos9multiplicados) 
    
    for(let i = 0; i<10; i++){
       
        primeiros10Multiplicado.push(cpfArr[i]*(11-i))
    }
    
    let somaDos10multiplicados = 0
    
    primeiros10Multiplicado.forEach ((numeroAtual)=>{
        somaDos10multiplicados = somaDos10multiplicados + numeroAtual
    })
            
    if(((somaDos9multiplicados*10) % 11 == cpfArr[9]) && ((somaDos10multiplicados *10) % 11 == cpfArr[10])){ 
        return "CPF válido"
    }else{
        return "CPF inválido"
    }
    
}

console.log(validaCPF('14320027752'))
console.log(validaCPF('14320027742'))
console.log(validaCPF('1432007742'))



