//entrar com uma string minuscula qualquer e colocar todos os caracteres da posição impar em maiusculo e devolver em string

const str = ("jessicabarrostorchia")

let arrNome = str.split('')

const convertePosicaoImparMaiusc = arrNome.map((letraAtual,i)=>{
    if(i % 2 != 0){
        letraAtual = letraAtual.toUpperCase()
        
    }else{
        letraAtual = letraAtual
    }       
  
    return letraAtual
})


console.log(convertePosicaoImparMaiusc.join(''))

