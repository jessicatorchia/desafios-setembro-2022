const fs = require('fs')    // serve para carregar a biblioteca do fs

// foi criado um arquivo .json com um array de numeros no qual será lido pelo readFileSyn abaixo
// Ainda, dessa forma quando eu precisar alterar os valores do arquivo, n irá se perder.


let arq = fs.readFileSync('./arq.json','utf-8')     // serve para ler o arquivo que eu criei em json,
// ps: é possível fazer um comando q cria um arquivo json com o: 
// fs.writeFileSync('./arq.json', JSON.stringify('./arq.json', JSON.stringify(variavel de um array))

let numerosArr = JSON.parse(arq)  //transforma a variavel que leu um arquivo em Json em uma variavel 
// array para que eu possa executar alguma funcao ou operação com a mesma


let media = numerosArr.reduce((acumulador,numeroAtual)=>{   // usando a variavel que foi transformada do Json para executar uma 
    return numeroAtual + acumulador                         // funcao reduce
},0)/numerosArr.length

fs.writeFileSync('./arq.txt', JSON.stringify(media))        //serve para chamar um arquivo, caso n exista, ele 
                                                            // cria o arquivo, e também transforma uma variavel em :
                                                            //O método JSON.stringify() converte valores em javascript para uma String JSON.





