//Recebe um array  e quebra e 2 partes grando um novo array

function divideEm2Arrays (strings){

    let arr1 = []

    let arr2 = []
    
    strings.forEach ((stringAtual,i)=>{
        if(i<=(strings.length/2)){
            arr1[arr1.length] = stringAtual
        }else{
            arr2[arr2.length] = stringAtual
        }
    })
    
    return (arr1 +' '+ arr2)
}



console.log(divideEm2Arrays(['a','b','c','d','e']))



