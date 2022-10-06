// entrada de um array com numeros de de 0 a 100 que podem ou nao repetir
// devolver outro array onde conta a quantidade de numeros 

let entrada = [0,1,2,2,5,5,30,30,30,90,99]
// entrada = [...new Array(100000000)].map(()=> Math.floor(Math.random() * 100))

//primeira forma de  fazer:

function contador2(arr) {
    const arrSaida = []

    for(let j=0; j<arr.length; j++){
        let numeroAtual = arr[j]
        if(!arrSaida[numeroAtual]) {
            arrSaida[numeroAtual] = 1
        } else {
            arrSaida[numeroAtual] = arrSaida[numeroAtual] + 1
        }
    }
    const novoArr = []
    for(let i=0; i<100; i++){
        if(!arrSaida[i]) {
            novoArr.push(0)
        } else {
            novoArr.push(arrSaida[i])
        }
    }
    return novoArr
}

//segunda forma de fazer:

function contadorDeZero (arr){
    let arrSaida = []

    for(let i=0; i<100; i++){
    
        let numeroArr = 0
    
        for(let j=0; j<arr.length; j++){
            let numeroAtual = arr[j]
            let numZeroCem = i
                
            if(numZeroCem ===  numeroAtual){
                
                numeroArr = numeroArr + 1
            }    
            
                
        }
        arrSaida.push(numeroArr)
        
    }
    return arrSaida
}


console.log(contador2(entrada))
