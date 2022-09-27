//transformar uma string em outra string com separador em ponto



const stringEntrada = "a-b-c-d-e-f"


let stringArr = stringEntrada.split("-")


let stringSaida = stringArr.join('.')


console.log(stringSaida)

/*aprendi que o .split transforma uma string em array a partir de um separador, pode ser sem espaço (''), pode ser com espaço(" "), pode ser hífen ("-"), dois pontos (":")
etc, dessa forma cada elemento antes e depois do seu separador vira um elemento do array, após as alterações com o array, caso queira voltar para a string,
basta usar o .join com seu separador que pode ser em espaço (''), pode ser com espaço(" "), pode ser hífen ("-"), dois pontos (":"), etc.
*/