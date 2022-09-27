//imprimir o ultimo nome de uma string com nome e sobrenome

const stringEntrada = "jessica barros torchia Pereira"

let stringArr = stringEntrada.split(" ")

let posicao3 = stringArr[stringArr.length - 1]

console.log(posicao3)


/*primeira coisa nessa situação é transformar uma string em array para que assim, eu consiga mexer nos elementos
aprendi que posso usar o .length para tudo inclusive em casos de string, pq eu a transformei em array
*/
