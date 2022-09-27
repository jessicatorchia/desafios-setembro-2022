//Imprimir o quadrado de cada número:

let arrNumeros = [7,9,2,5,7,4]

let quadradoDeCada = arrNumeros.map((numeroAtual)=> numeroAtual * numeroAtual)


console.log(quadradoDeCada)

console.log(arrNumeros)


/*a função .map (mapear), é usado para chamar uma função que altera todos os valores/ elementos deum
array devolvendo um novo array com a mesma quantidade de elementos, porém alterados pela operação
definida no corpo da função.
Atenção: no map não é criado um novo array, apenas alterados os elementos do array trabalhado
*/
