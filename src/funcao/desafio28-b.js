// receber dois arrays e juntar em 1 array maior

// const arrayTotal = array1.concat(array2)


function juntarArrays (array1, array2){
    
    
    const arrayTotal = []
    // console.log(arrayTotal)
    
    for(let i=0; i<array1.length; i++){
        let numeroAtual = array1[i]
        arrayTotal[arrayTotal.length] = numeroAtual
       
    }
    for(let i=0; i<array2.length; i++){
        let numeroAtual = array2[i]
        arrayTotal[arrayTotal.length] = numeroAtual
         
    }  

    return arrayTotal
}



console.log(juntarArrays([1,2,3],[4,5,6]))
console.log(juntarArrays([],[4,5,6]))
console.log(juntarArrays([1,2,3],[]))
console.log(juntarArrays([],[]))

