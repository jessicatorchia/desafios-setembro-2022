//3 variaveis , nome, sexo, idade, se o sexo for feminino, e a idade < 25 anos, imprime a palavra aceita, do contrário nao aceita

const entrada = "jessica,f,3"

let arrEntrada = entrada.split(',')


let sexo = true

let idade = true



if(arrEntrada[1] != 'f'){
 
   sexo = false
}
if(Number(arrEntrada[2]) >= 25){
    idade = false
}

if(sexo == true && idade == true){
    console.log('Aceita!')
}else{
    console.log('Não Aceita!')
}




