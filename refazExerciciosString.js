//Desafio 36 - separador de string transformar uma string em outra string com separador em ponto

// const stringEntrada = "a-b-c-d-e-f"

// let stringArr = stringEntrada.split('-')

// let stringSaida = stringArr.join('.')

// console.log(stringSaida)




// Desafio 37 - imprimir sempre o ultimo node de uma string

// const stringEntrada = "jessica barros torchia"

// let arrStringEntrada = stringEntrada.split(' ')

// let arrString3Nome = arrStringEntrada[arrStringEntrada.length - 1]

// console.log(arrString3Nome)




// Desafio 38 - filtrando array com indexOf, imprimir um array que contenha
// todos os nomes de pessoa q começam com a letra “j”

// const arr = ['ana','bia','jose','juju','jeje','carlos']

// let arrFiltroJ = []

// for(let i =0; i<arr.length; i++){
//     let palavraAtual = arr[i]
//     if(palavraAtual.indexOf('j',0) != -1){
//         arrFiltroJ.push(palavraAtual)
//     }
// }


// console.log(arrFiltroJ)


// Desafio 39 - primeira letra maiúscula ; entrar com uma string nome e sobrenome
// em minusculo, converter a primeira letra de cada palavra em maiúsculo e devolver em string

// const nomeEntrada = "jessica barros torchia"

// let arrNomeEntrada = nomeEntrada.split(' ')

// let arrSaidaMaiusc = []

// for(let i = 0; i<arrNomeEntrada.length; i++){
//     let palavraAtual = arrNomeEntrada[i]
//     let primeiraLetra = palavraAtual.substr(0,1)
//     let resto = palavraAtual.substr(1)
//     primeiraLetra = primeiraLetra.toUpperCase()

//     arrSaidaMaiusc.push(primeiraLetra + resto)

// }
// console.log(arrSaidaMaiusc)



// Desafio 40 - ultima letra maiúscula; Entrar com uma string
// nome e sobrenome em minusculo, converter a ultima letra de cada palavra em maiúsculo e devolver em string

// const nomeEntrada = "jessica barros torchia"

// let arrNomeEntrada = nomeEntrada.split(' ')

// let arrMaiusculo = []

// for(let i= 0; i<arrNomeEntrada.length; i++){
//     let palavraAtual = arrNomeEntrada[i]
//     let ultimaLetra = palavraAtual.substr(palavraAtual.length-1)
//     ultimaLetra = ultimaLetra.toUpperCase()
//     let resto = palavraAtual.substr(0,palavraAtual.length-1)
//     arrMaiusculo.push(resto + ultimaLetra)

// }
// let strArrMaiusc = arrMaiusculo.join(' ')

// console.log(strArrMaiusc)



// Desafio 41 - maiúsculo quando for impar; entrar com uma string minuscula qualquer e colocar todos os caracteres da
// posição impar em maiusculo e devolver em string

// const entrada = "jessicabarrostorchia"

// let nomeSaida = ""

// for(let i=0; i<entrada.length; i++){
//     let letraAtual = entrada[i]
//     if(i % 2 == 0){
//         nomeSaida = nomeSaida + letraAtual.toUpperCase()
//     }else{
//         nomeSaida = nomeSaida + letraAtual
//     }


// }

// console.log(nomeSaida)





// Desafio 42 - retirar os espaços de uma string

// const stringEntrada = "jessica    "

// let strSemEspaco = ''

// for(let i = 0; i<stringEntrada.length; i++){
//     let letraAtual = stringEntrada[i]
//     if(letraAtual != ' '){
//         strSemEspaco = strSemEspaco + letraAtual
//     }
// }

// console.log(strSemEspaco)



// Desafio 43 -retirar os espaços do começo de uma string

// const stringEntrada = " jessica   "
// let semEspaco = ''

// for(let i=0; i<stringEntrada.length; i++){
//     let letraAtual = stringEntrada[i]

//     let resto = stringEntrada.substr(1)
//     if( letraAtual.indexOf(' ',0) != -1){
//         semEspaco = semEspaco + resto
//         break
//     }if(letraAtual.indexOf(' ', 0)== -1){
//         semEspaco = semEspaco +letraAtual+ resto
//         break
//     }
        

// }
// console.log(semEspaco)



// Desafio 44 -retirar os espaços do começo e do final de uma string

// const stringEntrada = "    jessica   "


// let semEspaco = ''

// for(let i = 0; i<stringEntrada.length; i++){
//     let espaco = (' ')
//     let letraAtual = stringEntrada[i]
//     if(letraAtual != espaco){
//         semEspaco = semEspaco + letraAtual
//     }
// }

// console.log(semEspaco)



// Desafio 45 -retirar os espaços do começo de uma string
// sem usar array vazio, split e join

// const stringEntrada = "    jessica   "


// let semEspaço = stringEntrada

// let palavra = ''

// for(let i = 0; i<stringEntrada.length; i++){
//     let letraAtual = stringEntrada[i]
//     if(letraAtual != " "){
    
//         palavra = palavra + letraAtual
//     }
    
// }



// console.log(palavra.split(' '))



// Desafio 46 - substituir palavra na string
// recebe uma frase string, em todas as palavras maçã, substituir por banana

// const frase = 'A maca é boa, eu gosto de maca'

// let arrFrase = frase.split(' ')

// let frutaSubst = 'banana'

// let fraseNova = []

// for(let i=0; i< arrFrase.length; i++){
//     let palavraAtual = arrFrase[i]
//     if(palavraAtual == 'maca'){
//         palavraAtual = frutaSubst
//         fraseNova.push(palavraAtual)
//     }else{
//         fraseNova.push(palavraAtual)
//     }

// }

// console.log(fraseNova.join(' '))




// Desafio 47 - imprime as iniciais de um nome
// recebe um nome completo (nome + sobrenome) e imprime as 
// iniciais do Nome ex: JBT

// const nome = 'Jessica Barros Torchia'

// let arrNome = nome.split(' ')

// let iniciais = []


// for(let i = 0; i<arrNome.length; i++){
//     let palavraAtual = arrNome[i]
//     let letraInicial = palavraAtual[0]
//     iniciais.push(letraInicial) 
    
// }
// console.log(iniciais.join('.'))

// Desafio 48 - comparação das variáveis da string
// 3 variáveis , nome, sexo, idade, se o sexo for feminino,
// e a idade < 25 anos, imprime a palavra aceita, do contrário não aceita.


// const entrada = "jessica,f,74"

// let arrNomeEntrada = entrada.split(',')

// let sexo = false

// let idade = false

// for(let i = 0; i<arrNomeEntrada.length; i++){
//     let dado = arrNomeEntrada[i]

//     if(i == 1 && dado == 'f' ){
//         sexo = true
//     }
//     if(i ==2 && Number(dado) < 25){
//         idade = true
//     }
// }

// if(idade == true && sexo == true){   
//     console.log("Aceita")
// }else{
//     console.log("Não aceita")
// }

// Desafio 49 - contando letras na string
// receber uma string e contar quantidade de letras 'a' dentro da string palavra (fazer sem array)


// const string = 'abcaaddjjah aaaa'

// let contador = 0


// for(let i=0; i<string.length;i++){
//     let letraAtual = string[i]

//     if(letraAtual == 'a' || letraAtual == 'A'){
        
//         contador = contador + 1
//     }
    
// }

// console.log(contador)



// Desafio 50 - substituir letras na string
// Substituir as letras "a" por uma string da letra "o" (sem array)

// const stringA = "jesaaaaaaaaaasica"

// let stringO = ''


// for(let i=0; i<stringA.length; i++){
//     let letraAtual = stringA[i]
//     let letraO =    'o'
//     if(letraAtual == 'a'){
//         letraAtual = letraO
    
//     }
//     stringO = stringO + letraAtual

// }

// console.log(stringO)

// Desafio 51 - inverte palavra
// Receber uma palavra e imprimir de trás para frente

// const str = "jessica"

// let strInversa = ''

// for(let i = str.length-1; i>=0; i--){
//     let letraAtual = str[i]
//     strInversa = strInversa + letraAtual
    
// }

// console.log(strInversa)




// Desafio 52 - retira as vogais da string
// Receber uma palavra e imprimir sem as vogais(sem usar array)

// const str = "jessica"

// let strSemVogal = ''

// for(let i = 0; i<str.length; i++){
//     let letraAtual = str[i]
//     if(letraAtual != 'a'&& letraAtual !='e'&& letraAtual != 'i' && letraAtual != 'o' && letraAtual != 'u'){
//         strSemVogal = strSemVogal + letraAtual
//     }
// }

// console.log(strSemVogal)

// Desafio 53 - Calcula vogais da string
// Recebe uma palavra e calcula quantidade de vogais

// const str = "jessica"

// let contador = 0

// for(let i = 0; i<str.length; i++){
//     let letraAtual = str[i]
//     if(letraAtual == 'a' || letraAtual =='e'|| letraAtual == 'i' || letraAtual == 'o' || letraAtual == 'u'){
//         contador = contador + 1
//     }
// }

// console.log(contador)



// Desafio 54 - Calcula caracteres de uma frase
// recebe uma palavra e conta quantos caracteres tem sem contar os espaços em branco

// const str = 'Jessica Barros Torchia   '

// let contador = 0

// for(let i = 0; i<str.length; i++){
//         let letraAtual = str[i]
//         if(letraAtual != ' ' ){
//             contador = contador + 1
//         }
//     }
    
//     console.log(contador)



// Desafio 55 - transforma string em caracter de UTF-8
// Recebe uma string e imprime a prox letra de cada letra conforme o caracter UTF-8

// const str = 'jessica'

// let strProx = ''

// for(let i = 0; i<str.length; i++){
//     let letraAtual = str.charCodeAt(i)
//     let proxLetra = letraAtual + 1
//     strProx = strProx + String.fromCharCode(proxLetra)
// }
// console.log(strProx)



// Desafio 56 - transforma string em valor da posição de UTF-8
// Receber uma palavra e montar um aray com o valor da posição do UTF-8 (usar array)

// const str = 'jessica'

// let strCod = ''



// for(let i = 0; i<str.length; i++){
//     let letraAtual = str.charCodeAt(i)
//     strCod = strCod + Number(letraAtual) + ' '
// }

// let arrCod = strCod.split(' ')

// let arrSaida = []

// for(let i = 0; i<arrCod.length; i++){
//     let codAtual = arrCod[i]
//     if(codAtual != ''){
//         arrSaida.push(codAtual)
//     }
// }

// console.log(arrSaida)



// Desafio 62 - Obj
// Ler o nome de uma mercadoria e seu valor e imprimir 
// produto:mercadoria; preço:valor; preço à vista: valor - 10%

// const entrada = {produto:'banana',preco:5}

// let desc = 'desc. 10% valor ' + entrada.preco * 0.90 + ' reais'

// console.log("produto:" + entrada.produto + '; preço:' + entrada.preco+ ';'+desc)



//Desafio 63 - Obj; 3 variaveis , nome, sexo, idade, se o sexo for feminino, e a idade < 25 anos, imprime a palavra aceita, do contrário nao aceita

// const entrada = {
//     nome:'jessica',
//     sexo:'f', 
//     idade: 20
// }

// if(entrada.sexo == 'f' && entrada.idade < 25 ){
//     console.log('Aceito!')

// }else{
//     console.log('Não Aceito')
// }




//Desafio 64 - Obj;criar 3 objetos de pessoas com 20 itens de dados e imprimir as pessoas maiores de 18 anos

// const pessoa1 = {
//     nome:'jessica barros torchia',
//     nomeMae: 'janaina',
//     nomePai: 'julio',
//     sexo:'f', 
//     idade: 30,
//     altura: 1.65,
//     peso: 62,
//     manequim: 42,
//     calcado: 35,
//     rua: 'Anibal Couto',
//     num: '56',
//     bairro: 'Santa Rosa',
//     cidade: 'Barra Mansa',
//     corCasa: 'branca',
//     cep: '27323130',
//     profissao: 'aprendiz de desenvolvimento',
//     escolaridade: 'Superior Completo',
//     hobbie: 'bike',
//     bebida: 'vinho',
//     carro: 'palio',
// }

// const pessoa2 = {
//     nome:'joao alberto ribas',
//     nomeMae: 'vania',
//     nomePai: 'josé',
//     sexo:'m', 
//     idade: 45,
//     altura: 1.40,
//     peso: 89,
//     manequim: 50,
//     calcado: 42,
//     rua: 'AAA',
//     num: '561',
//     bairro: 'vila santa cecilia',
//     cidade: 'volta redonda',
//     corCasa: 'azul',
//     cep: '27000123',
//     profissao: 'empresario',
//     escolaridade: 'Superior incompleto',
//     hobbie: 'natacao',
//     bebida: 'cafe',
//     carro: 'hb20',
// }

// const pessoa3 = {
//     nome:'antonio sergio de araujo',
//     nomeMae: 'tatiana',
//     nomePai: 'joao',
//     sexo:'m', 
//     idade: 15,
//     altura: 1.70,
//     peso: 70,
//     manequim: 44,
//     calcado: 42,
//     rua: 'bbb',
//     num: '11',
//     bairro: 'sao joao',
//     cidade: 'volta redonda',
//     corCasa: 'verde',
//     cep: '27000111',
//     profissao: 'estudante',
//     escolaridade: 'ensino médio incompleto',
//     hobbie: 'futebol',
//     bebida: 'refrigerante',
//     carro: '',
// }

// if(pessoa1.idade >= 18){
//     console.log(pessoa1.nome)
// }
// if(pessoa2.idade >= 18){
//     console.log(pessoa2.nome)
// }
// if(pessoa3.idade >= 18){
//     console.log(pessoa3.nome)
// }




// Desafio 65 - Obj; entrada objeto, imprimir todos as chaves (keys) que possuem letra 'o' no nome

// const pessoa1 = {
//     nome:'jessica barros torchia',
//     nomeMae: 'janaina',
//     nomePai: 'julio',
//     sexo:'f', 
//     idade: 30,
//     altura: 1.65,
//     peso: 62,
//     manequim: 42,
//     calcado: 35,
//     rua: 'Anibal Couto',
//     num: '56',
//     bairro: 'Santa Rosa',
//     cidade: 'Barra Mansa',
//     corCasa: 'branca',
//     cep: '27323130',
//     profissao: 'aprendiz de desenvolvimento',
//     escolaridade: 'Superior Completo',
//     hobbie: 'bike',
//     bebida: 'vinho',
//     carro: 'palio',
// }

// let arrChave = Object.keys(pessoa1)
// let arrValor = Object.values(pessoa1)

// let arrComO = []

// for(let i = 0; i<arrChave.length; i++){
//     let nome = arrChave[i]
//     if(nome.includes('o')){
//         arrComO.push(nome)
//     }
// }

// console.log(arrComO)




// Desafio 66 - Obj; entrada objeto, imprimir todos os valores (values) que possuem valor '0' no nome

// const pessoa1 = {
//     nome:'jessica barros torchia',
//     nomeMae: 'janaina',
//     nomePai: 'julio',
//     sexo:'f', 
//     idade: 30,
//     altura: 1.65,
//     peso: 62,
//     manequim: 42,
//     calcado: 35,
//     rua: 'Anibal Couto',
//     num: '56',
//     bairro: 'Santa Rosa',
//     cidade: 'Barra Mansa',
//     corCasa: 'branca',
//     cep: '27323130',
//     profissao: 'aprendiz de desenvolvimento',
//     escolaridade: 'Superior Completo',
//     hobbie: 'bike',
//     bebida: 'vinho',
//     carro: 'palio',
// }

// let arrvalor = Object.values(pessoa1)

// let arrValorZero = []

// for(let i = 0; i<arrvalor.length; i++){
//     let valor = arrvalor[i].toString()
//     if(valor.includes('0') ){
//         arrValorZero.push(valor)
//     }
// }

// console.log(arrValorZero)




// Desafio 67 - Obj; obj imprimir a chave e valor de todaos os atributos que o valor>30

// const pessoa1 = {
//     nome:'jessica barros torchia',
//     nomeMae: 'janaina',
//     nomePai: 'julio',
//     sexo:'f', 
//     idade: 30,
//     altura: 1.65,
//     peso: 62,
//     manequim: 42,
//     calcado: 35,
//     rua: 'Anibal Couto',
//     num: '56',
//     bairro: 'Santa Rosa',
//     cidade: 'Barra Mansa',
//     corCasa: 'branca',
//     cep: '27323130',
//     profissao: 'aprendiz de desenvolvimento',
//     escolaridade: 'Superior Completo',
//     hobbie: 'bike',
//     bebida: 'vinho',
//     carro: 'palio',
// }

// let arrChave = Object.keys(pessoa1)

// let arrValor = Object.values(pessoa1)

// let maior30 = []

// for(let i = 0; i<arrValor.length; i++){
//     let atual = arrValor[i]
//     if(Number(atual) > 30){
//         maior30.push(arrChave[i]+ ':' + arrValor[i])
//     }
// }

// console.log(maior30)



// Desafio 68 - Obj; compor novo obj montar segundo obj somente com os atributos do primeiro objeto  no qual o valor tenha algum caracter maiusculo

// const pessoa1 = {
//     nome:'jessica Barros torchia',
//     nomeMae: 'janaina',
//     nomePai: 'julio',
//     sexo:'f', 
//     idade: 30,
//     altura: 1.65,
//     peso: 62,
//     manequim: 42,
//     calcado: 35,
//     rua: 'Anibal Couto',
//     num: '56',
//     bairro: 'Santa Rosa',
//     cidade: 'Barra Mansa',
//     corCasa: 'branca',
//     cep: '27323130',
//     profissao: 'aprendiz de desenvolvimento',
//     escolaridade: 'Superior Completo',
//     hobbie: 'bike',
//     bebida: 'vinho',
//     carro: 'palio',
// }

// const arrChave = Object.keys(pessoa1)

// const arrValor = Object.values(pessoa1)

// let objSaida = {}

// for(let i = 0; i<arrValor.length; i++){
//     let palavraAtual = arrValor[i]
//     let chaveAtual = arrChave[i]

//     for(let j = 0; j<palavraAtual.length; j++){
//         let letraAtual = palavraAtual.charCodeAt(j)

//         if(letraAtual >= 65 && letraAtual <= 90){

//             objSaida[chaveAtual] = palavraAtual
//             break
//         }
//     }
// }

// console.log(objSaida)




// Desafio 69 - Obj; pegar Obj jogar em um novo Obj, se a ultima letra da chave for 'o' e o valor for um numero 
// const pessoa1 = {
//     nome:'jessica Barros torchia',
//     nomeMae: 'janaina',
//     nomePai: 'julio',
//     sexo:'f', 
//     idade: 30,
//     altura: 1.65,
//     peso: 62,
//     manequim: 42,
//     calcado: 35,
//     rua: 'Anibal Couto',
//     num: '56',
//     bairro: 'Santa Rosa',
//     cidade: 'Barra Mansa',
//     corCasa: 'branca',
//     cep: '27323130',
//     profissao: 'aprendiz de desenvolvimento',
//     escolaridade: 'Superior Completo',
//     hobbie: 'bike',
//     bebida: 'vinho',
//     carro: 'palio',
// }

// const arrChaves = Object.keys(pessoa1)

// const arrValores = Object.values(pessoa1)

// let objSaida = {}

// for(let i = 0; i<arrChaves.length; i++){
//     let chave = arrChaves[i]
//     let valor = arrValores[i]
//     if(arrChaves[i][arrChaves[i].length-1] == 'o' && Number.isNaN(Number(valor)) == false){
//         objSaida[chave] = valor
//     }
// }

// console.log(objSaida)




// Desafio 70 - Obj; pegar Obj e filtrar os valores que começam com a letra 'a' e jogar em um outro Obj

// const pessoa1 = {
//     nome:'jessica Barros torchia',
//     nomeMae: 'janaina',
//     nomePai: 'julio',
//     sexo:'f', 
//     idade: 30,
//     altura: 1.65,
//     peso: 62,
//     manequim: 42,
//     calcado: 35,
//     rua: 'Anibal Couto',
//     num: '56',
//     bairro: 'Santa Rosa',
//     cidade: 'Barra Mansa',
//     corCasa: 'branca',
//     cep: '27323130',
//     profissao: 'aprendiz de desenvolvimento',
//     escolaridade: 'Superior Completo',
//     hobbie: 'bike',
//     bebida: 'vinho',
//     carro: 'palio',
// }

// let arrChave = Object.keys(pessoa1)

// let arrValor = Object.values(pessoa1)

// let objSaida = {}


// for(let i=0; i< arrValor.length; i++){
//     let valorAtual = arrValor[i]
//     if(valorAtual[0] == 'a' || valorAtual[0] == "A"){
//         objSaida[arrChave[i]] = valorAtual
//     }
    
// }

// console.log(objSaida)



// Desafio 71 - Obj; filtrar para um novo objeto todos o itens chaves e valores que os valores estiverem em maiusculo

// const pessoa1 = {
//     nome:'jessica Barros torchia',
//     nomeMae: 'janaina',
//     nomePai: 'julio',
//     sexo:'f', 
//     idade: 30,
//     altura: 1.65,
//     peso: 62,
//     manequim: 42,
//     calcado: 35,
//     rua: 'Anibal Couto',
//     num: '56',
//     bairro: 'Santa Rosa',
//     cidade: 'BARRA MANSA',
//     corCasa: 'branca',
//     cep: '27323130',
//     profissao: 'aprendiz de desenvolvimento',
//     escolaridade: 'Superior Completo',
//     hobbie: 'bike',
//     bebida: 'VINHO',
//     carro: 'palio',
// }

// let arrChave = Object.keys(pessoa1)

// let arrValor = Object.values(pessoa1)

// let objSaida = {}

// for(let i=0; i<arrValor.length; i++){
//     let valorAtual = arrValor[i]
//     let valorString = valorAtual.toString()
//     let valorMaiusc = valorString.toUpperCase()
//     if(valorAtual == valorMaiusc && Number.isNaN(Number(valorString)) == true){
//         objSaida[arrChave[i]]=valorAtual
//     }
// }
// console.log(objSaida)




// Desafio 72 - Obj; Calcular a media de idade dos animais

// const animais = [
//     {
//         nome: 'bob',
//         tipo: 'gato',
//         cor: 'mesclado',
//         idade: 7
//     },
//     {
//         nome: 'lindona',
//         tipo: 'gato',
//         cor: 'cinza',
//         idade: 12,
//     },
//     {
//         nome: 'mel',
//         tipo: 'cachorro',
//         cor: 'castanho',
//         idade: 8,
//     },
//     {
//         nome: 'dog',
//         tipo: 'cachorro',
//         cor: 'branco',
//         idade: 1,
//     },
//     {
//         nome: 'pepe',
//         tipo: 'passaro',
//         cor: 'azul',
//         idade: 4,
//     }
// ]

// let contadorIdade = 0

// for(let i = 0; i<animais.length; i++){
//     let animalAtual = animais[i]
//     let idade = animalAtual['idade']

//     if(idade){
//         contadorIdade = contadorIdade + idade
//     }
// }

// console.log(contadorIdade/animais.length)



// Desafio 73 - Obj; filtrar todos os animais que tenha letra 'o' no nome

// const animais = [
//     {
//         nome: 'bob',
//         tipo: 'gato',
//         cor: 'mesclado',
//         idade: 7
//     },
//     {
//         nome: 'lindona',
//         tipo: 'gato',
//         cor: 'cinza',
//         idade: 12,
//     },
//     {
//         nome: 'mel',
//         tipo: 'cachorro',
//         cor: 'castanho',
//         idade: 8,
//     },
//     {
//         nome: 'dog',
//         tipo: 'cachorro',
//         cor: 'branco',
//         idade: 1,
//     },
//     {
//         nome: 'lepe',
//         tipo: 'passaro',
//         cor: 'azul',
//         idade: 4,
//     }
// ]

// let arrSaida = []

// for(let i=0; i< animais.length; i++){
//     let animalAtual = animais[i]
//     if(animalAtual['nome'].includes('o') == true){
//         arrSaida.push(animalAtual)
//     }
// }

// console.log(arrSaida)



// Desafio 74 - Obj; Filtrar em um novo array que os nomes comecem com a letra 'l'

// const animais = [
//     {
//         nome: 'bob',
//         tipo: 'gato',
//         cor: 'mesclado',
//         idade: 7
//     },
//     {
//         nome: 'lindona',
//         tipo: 'gato',
//         cor: 'cinza',
//         idade: 12,
//     },
//     {
//         nome: 'mel',
//         tipo: 'cachorro',
//         cor: 'castanho',
//         idade: 8,
//     },
//     {
//         nome: 'dog',
//         tipo: 'cachorro',
//         cor: 'branco',
//         idade: 1,
//     },
//     {
//         nome: 'Lepe',
//         tipo: 'passaro',
//         cor: 'azul',
//         idade: 4,
//     }
// ]

// let arrSaida = []


// for(let i = 0; i< animais.length; i++){
//     let animalAtual = animais[i]
//     let nomeAnimal = animalAtual.nome
//     if(nomeAnimal[0] == 'l' || nomeAnimal[0] == 'L' ){
//         arrSaida.push(animalAtual)
//     }
// }

// console.log(arrSaida)



// Desafio 75 - Obj; Filtrar em um novo array todos os animais cachorros ou gato com idade maior que 7
// const animais = [
//     {
//         nome: 'bob',
//         tipo: 'gato',
//         cor: 'mesclado',
//         idade: 7
//     },
//     {
//         nome: 'lindona',
//         tipo: 'gato',
//         cor: 'cinza',
//         idade: 12,
//     },
//     {
//         nome: 'mel',
//         tipo: 'cachorro',
//         cor: 'castanho',
//         idade: 8,
//     },
//     {
//         nome: 'dog',
//         tipo: 'cachorro',
//         cor: 'branco',
//         idade: 1,
//     },
//     {
//         nome: 'Lepe',
//         tipo: 'passaro',
//         cor: 'azul',
//         idade: 4,
//     }
// ]

// let arrSaida = []

// for(let i = 0; i<animais.length; i++){
//     let animalAtual = animais[i]
//     let idade = animalAtual.idade
//     if(idade >7){
//         arrSaida.push(animalAtual)
//     }
// }

// console.log(arrSaida)



// Desafio 75 - Obj; /Filtrar em um novo array todos os animais cachorros ou gato com idade maior que 7

// const animais = [
//     {
//         nome: 'bob',
//         tipo: 'gato',
//         cor: 'mesclado',
//         idade: 7
//     },
//     {
//         nome: 'lindona',
//         tipo: 'gato',
//         cor: 'cinza',
//         idade: 12,
//     },
//     {
//         nome: 'mel',
//         tipo: 'cachorro',
//         cor: 'castanho',
//         idade: 8,
//     },
//     {
//         nome: 'dog',
//         tipo: 'cachorro',
//         cor: 'branco',
//         idade: 1,
//     },
//     {
//         nome: 'Lepe',
//         tipo: 'passaro',
//         cor: 'azul',
//         idade: 4,
//     }
// ]

// let saida = []

// for(let i = 0; i< animais.length; i++){
//     let animalAtual = animais[i]
//     let tipo = animalAtual.tipo
//     let idade = animalAtual.idade
//     if(idade> 7 && (tipo == 'cachorro' || tipo == 'gato')){
//         saida.push(animalAtual)
             
//     }
// }

// console.log(saida)



// Desafio 77 - Obj; mapear o array de string frutas em um array de Obj. Frutas

const frutas = ['uva', 'banana', 'morango', 'laranja', 'pera'];

let arrNovo = [];

for(let i = 0; i<frutas.length; i++){
    let frutaAtual = frutas[i];

    arrNovo.push({nome:frutaAtual});
}

console.log(arrNovo);