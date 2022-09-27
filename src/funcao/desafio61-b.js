//receber uma data e dizer se é valida ou não



function dataEValida (entrada){
    let arrEntrada = entrada.split("/")
    let dia = Number(arrEntrada[0])
    let mes = Number(arrEntrada[1])
    let ano = Number(arrEntrada[2])

    if(arrEntrada.length!=3){
        return false
    }

    if(Number.isInteger(ano)==false || Number.isInteger(dia)==false || Number.isInteger(mes) == false){
        return false
    }
    if(dia<1){
        return false
    }
    if((dia <= 31 && (mes == 1 || mes == 3 || mes == 5|| mes == 7|| mes == 8|| mes == 10|| mes == 12)) ){
        return true
    }
    if(dia <= 30 && (mes == 4 || mes == 6 || mes == 09|| mes == 11)) {
        return true
    }
    if(dia <= 29 && (mes == 2)){
        return true
    }
    return false

  
}

for(let i=0; i<1000; i++){
let data1 = dataEValida("04/05/2022/111")
let data2 = dataEValida("04/55/2022")
}


console.log(data1)
console.log(data2)