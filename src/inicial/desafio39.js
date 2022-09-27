//entrar com uma string nome e sobrenome em minusculo, conveerter a primeira letra de cada palavra em maiusculo e devolver em string

const nomeEntrada = "jessica barros torchia"

let nomeArr = nomeEntrada.split(' ')


let arrMaiusculo = []

for(let i = 0; i<nomeArr.length; i++){
    let palavraAtual = nomeArr[i]
    let primLetra = palavraAtual.substr(0,1)
    let resto = palavraAtual.substr(1)
    primLetra = primLetra.toUpperCase()
    arrMaiusculo.push(primLetra + resto)
}


let stringMaiuscula = arrMaiusculo.join(' ')

console.log(stringMaiuscula)

/*Aprendi que o .substf possui dois atributos, .substf(posição q quero começar, quantos caracteres quero pegar),
pode ser usado também somente com o primeiro atributo .substf(posição q quero começar) assim ele vao pegar daquela posição até o final do elemento;
aprendo que o toUpperCase serve para colocar a paravra em maiusculo e posso usar antes um substf atribuindo uma variavel que eu queira deixar em maiusculo
posso também após a transformação da letra, juntar os pedaçõs para um novo array.
*/

