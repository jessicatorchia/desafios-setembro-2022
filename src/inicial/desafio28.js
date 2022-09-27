// receber dois arrays e juntar em 1 array maior

const array1 = [1,2,3]

const array2 = [4,5,6]

// const arrayTotal = array1.concat(array2)

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


console.log(arrayTotal)

/*Entendi que para criar um arry novo com valores de um outro array, eu preciso
criar uma variavel de array vazia para os meus valores do for com if serem atribuidos la
eu preciso colocar a posição do array para inicio de atribuição que no caso da array
vazia é o nome dela .lenght que é o tamanho da array
*/

