//Substituir as letras "a" por uma string da letra "o" (sem array)

const stringA = "jessica"


let stringO = ""

for(i=0; i<stringA.length; i++){
    if(stringA[i] == 'a'){
        stringO = stringO + 'o'
    }else{
        stringO = stringO + stringA[i]
    }
    
}

console.log(stringO)