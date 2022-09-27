//Substituir as letras "a" por uma string da letra "o" (sem array)


function substituirAPorO (stringNome){
    let stringO = ""

    for(i=0; i<stringNome.length; i++){
        if(stringNome[i] == 'a'){
            stringO = stringO + 'o'
        }else{
            stringO = stringO + stringNome[i]
        }
        
    }
    return stringO
}

console.log(substituirAPorO("jessica"))