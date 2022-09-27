// Imprimir a multiplicação de todos por todos

const arr = [7,9,2,5,7,4]

let total = 1

for (let i =0; i< arr.length; i++){
    let numeroAtual = (arr[i])
    total = total * numeroAtual
    
}

console.log(total)

/*
Nesse exercício pude perceber que a variável let total precisa
ser criada fora do for para que o valor nao altere como a variável numeroAtual
que precisamos que seja alterada. Percebi também que em situações de multiplicação
para pegar o primeiro numero do array, eu atribuo na variavel que nao quero mudar
o valor de 1 (um) para que assim ela possa me dar o valor na multiplicação
do primeiro array, em caso de soma, atribuiria o zero para que seja somado com ele
e me daria o valor do primeiro item do array e fosse se somando.

Observei também que como nesse exercício não possui condição, não precisei
usar if e else.
*/