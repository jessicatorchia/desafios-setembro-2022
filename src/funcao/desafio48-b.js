//3 variaveis , nome, sexo, idade, se o sexo for feminino, e a idade < 25 anos, imprime a palavra aceita, do contrário nao aceita

function verificaFemininoIdadeMenor25 (stringNomeSexoIdade){

    let arrEntrada = stringNomeSexoIdade.split(',')

    let sexo = true
    
    let idade = true
    
    if(arrEntrada[1] != 'f'){
     
       sexo = false
    }
    if(Number(arrEntrada[2]) >= 25){
        idade = false
    }
    
    if(sexo == true && idade == true){
        return 'Aceita!'
    }else{
        return 'Não Aceita!'
    }
}

console.log(verificaFemininoIdadeMenor25("jessica,f,3"))



