//3 variaveis , nome, sexo, idade, se o sexo for feminino, e a idade < 25 anos, imprime a palavra aceita, do contrário nao aceita

const entrada = {
    nome:'jessica',
    sexo:'f', 
    idade: 25
}

let sexo 
let idade 



if(entrada.sexo == 'f'){
    sexo = true
}else{
    sexo = false
}
if(entrada.idade <= 25 ){
    idade = true
}else{
    idade = false
}

if(sexo == true && idade == true){
    console.log('Aceita!')
}else{
    console.log('Não Aceita!')
}

