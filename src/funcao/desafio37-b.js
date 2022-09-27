//imprimir o ultimo nomde de uma string com nome e sobrenome

function ultimoNome (stringNomeSobrenome){

    let stringArr = stringNomeSobrenome.split(" ")

    return stringArr[stringArr.length - 1]

}

console.log(ultimoNome("jessica barros torchia Pereira"))


