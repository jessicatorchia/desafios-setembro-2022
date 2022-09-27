//Recebe um array  e quebra e 2 partes grando um novo array

function divideEm2Arrays (strings){

    let arr1 = []

    let arr2 = []
    
    for(let i = 0; i< strings.length; i++){
        
        if( i<= (strings.length/2)){
            arr1[arr1.length] = strings[i]
        }else{
            arr2[arr2.length] = strings[i]
        }              
    }
    return (arr1 +' '+ arr2)
}



console.log(divideEm2Arrays(['a','b','c','d','e']))



