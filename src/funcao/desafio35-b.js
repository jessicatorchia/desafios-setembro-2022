

function verificadorDeCNPJ (stringsCNPJ){

    const cnpjArr = stringsCNPJ.split('') //virou numero

    let multiplicadosDo1DV = []
    
    for(let i = 0; i <cnpjArr.length; i++){
        let numeroAtual = cnpjArr[i]
        if(i<=3){
            numeroAtual = numeroAtual*(6+i)
            multiplicadosDo1DV[multiplicadosDo1DV.length] = numeroAtual
        }else {
            numeroAtual = numeroAtual*(i-2)
            multiplicadosDo1DV[multiplicadosDo1DV.length] = numeroAtual
        }
    }
    
    // // console.log(multiplicadosDo1DV)
    
    let somaDosMultiplicadosDo1DV = 0
    
    for(let i=0; i<multiplicadosDo1DV.length; i++){
        let numeroAtual = multiplicadosDo1DV[i]
        somaDosMultiplicadosDo1DV = somaDosMultiplicadosDo1DV + numeroAtual
    }
    
    // console.log(somaDosMultiplicadosDo1DV)
    
    let multiplicadosDo2DV = []
    
    for(let i = 0; i <cnpjArr.length; i++){
        let numeroAtual = cnpjArr[i]
        if(i>=0 && i<=4){
            numeroAtual = numeroAtual*(5+i)
            multiplicadosDo2DV[multiplicadosDo2DV.length] = numeroAtual
        }
        if(i>4 && i<=12){
            numeroAtual = numeroAtual*(i-3)
            multiplicadosDo2DV[multiplicadosDo2DV.length] = numeroAtual
        }
    }
    
    // console.log(multiplicadosDo2DV)
    
    let somaDosMultiplicadosDo2DV = 0
    
    for(let i=0; i<multiplicadosDo2DV.length; i++){
        let numeroAtual = multiplicadosDo2DV[i]
        somaDosMultiplicadosDo2DV = somaDosMultiplicadosDo2DV + numeroAtual
    }
    
    // console.log(somaDosMultiplicadosDo2DV)
    
    if((somaDosMultiplicadosDo1DV % 11 == cnpjArr[12]) && (somaDosMultiplicadosDo2DV % 11 == cnpjArr[13])){  
        return ("CNPJ válido")
    }else{
        return ("CNPJ inválido")
    }
    
}


console.log(verificadorDeCNPJ('00776574000156'))
