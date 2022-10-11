const fs = require('fs')

let pessoas = [{
    nome: "ana",
    idade: 3
},{
    nome: "joao",
    idade: 15
},{
    nome: 'gabriela',
    idade: 45
}]


fs.writeFileSync('./x.json', JSON.stringify(pessoas, null, 2))  // writeFileSync(), que permite a escrita ou gravação em um arquivo de forma síncrona, 
// ou seja, ela bloqueia o restante do código até que a gravação esteja completa, 
// Se o arquivo não existir, a função fs.writeFileSync() o criará. Se o arquivo já existir e possuir algum conteúdo, seu conteúdo será sobresposto.
// O mesmo vale para a função assíncrona fs.writeFile().

// O método JSON.stringify() converte valores em javascript para uma String JSON. Esses valores podem ser substituidos especificando a função replacer, 
// ou incluindo somente as propriedades específicas, quando o array do replacer for especificado.


let x = fs.readFileSync('./x.json', 'utf-8') //fs.readFileSync(), podemos ler arquivos de forma síncrona, ou seja, estamos dizendo ao node.js para 
// bloquear outro paralelo processar e fazer o processo de leitura do arquivo atual.

let obj = JSON.parse(x) //O método JSON.parse() analisa uma string JSON, construindo o valor ou um objeto JavaScript descrito pela string. Uma função 
// reviver opcional pode ser fornecida para executar uma transformação no objeto que será retornado.
//Valor retornado : O Object correspondente ao text JSON fornecido.

console.log(obj)