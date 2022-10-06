// gerar outro array com os números positivos de outro array


let entrada = [-7,9,-2,5,7,-4]

let arrPositivo = entrada.filter((numeroAtual)=>{
    if(numeroAtual > 0){
        
        return true
    }
})


console.log(arrPositivo)
