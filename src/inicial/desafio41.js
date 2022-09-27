//entrar com uma string minuscula qualquer e colocar todos os caracteres da posição impar em maiusculo e devolver em string

const nomeEntrada = "jessicabarrostorchia" 

let nomeArr = nomeEntrada.split('')


let arrMaiusculo = []

let letraPar = 0

let letraImp = 0

for(let i = 0; i<nomeArr.length; i++){
    let letraAtual = nomeArr[i]
    
    if(i % 2 != 0){
        letraImp = letraAtual.toUpperCase()
        arrMaiusculo.push(letraImp) 
    }else{
        letraPar = letraAtual
        arrMaiusculo.push(letraPar)
    }
    
  
}


let stringMaiuscula = arrMaiusculo.join('')

console.log(stringMaiuscula)

