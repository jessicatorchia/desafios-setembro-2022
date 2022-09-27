// receber dois arrays e juntar em 1 array maior

// const arrayTotal = array1.concat(array2)


function juntarArrays (array1, array2){
    
    
    const arrayTotal = []
    // console.log(arrayTotal)
    
    array1.forEach ((numeroAtual)=>{
        arrayTotal[arrayTotal.length] = numeroAtual
    })
    array2.forEach((numeroAtual)=>{
        arrayTotal[arrayTotal.length] = numeroAtual
    })
    
    return arrayTotal
}



console.log(juntarArrays([1,2,3],[4,5,6]))
console.log(juntarArrays([],[4,5,6]))
console.log(juntarArrays([1,2,3],[]))
console.log(juntarArrays([],[]))

