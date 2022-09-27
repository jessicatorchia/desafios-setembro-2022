// gerar outro array com os números positivos de outro array

const arr = [-7,9,-2,5,7,-4]

let arrPositivo = []

for(let i=0; i<arr.length; i++){
    let numeroAtual = arr[i]
    if(numeroAtual > 0){
        arrPositivo[arrPositivo.length] = numeroAtual
    
    }
}

console.log(arrPositivo)

/*Entendi que para criar um arry novo com valores de um outro array, eu preciso
criar uma variavel de array vazia para os meus valores do for com if serem atribuidos la
eu preciso colocar a posição do array para inicio de atribuição que no caso da array
vazia é o nome dela .lenght que é o tamanho da array
*/