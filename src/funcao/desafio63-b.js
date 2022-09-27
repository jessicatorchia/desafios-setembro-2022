//3 variaveis , nome, sexo, idade, se o sexo for feminino, e a idade < 25 anos, imprime a palavra aceita, do contrário nao aceita

function verificaFemininoIdadeMenor25 (objDadosNomeSexoIdade){

    let sexo 
    let idade 
    
    if(objDadosNomeSexoIdade.sexo == 'f'){
        sexo = true
    }else{
        sexo = false
    }
    if(objDadosNomeSexoIdade.idade < 25 ){
        idade = true
    }else{
        idade = false
    }
    
    if(sexo == true && idade == true){
        return ('Aceita!')
    }else{
        return ('Não Aceita!')
    }
    
}


const entrada = {
    nome:'jessica',
    sexo:'f', 
    idade: 25
}

console.log(verificaFemininoIdadeMenor25(entrada))