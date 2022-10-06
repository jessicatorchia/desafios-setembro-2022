const dayjs = require("dayjs")

// const x = []

// const a = {}

// const n = 3

// const s = 'abc'

// const b = true

// a.n = n
// a.s = s
// a.b = !!b

// x.push(a)
// x.push(n)
// x.push(s)
// x.push(b)
// x.push(x)


// const animal = {}

// animal.nome = 'zebra'

// const animais = []

// animais.push(animal)

// animal.nome = 'leao'

// animais.push(animal)

// animal.nome = 'cachorro'

// console.log(animais)


// // let fruta = 'banana'

// // const frutas = []

// // frutas.push(fruta)


// // fruta = 'uva'

// // frutas.push(fruta)

// // console.log(frutas)


// let pessoa = 'jessica'

// pessoa = pessoa + "barros"

// pessoa = 'afonso'

// let y = pessoa

// pessoa = 'juliana'

// pessoa = 'julio'

// pessoa = y + pessoa

// let arr = []

// arr.push(y)

// y = 'janaina'

// arr.push(y)









// let carro = {nome: 'palio'}

// let carros = [carro]

// carro.nome = 'gol'

// carros.push(carro)

// carro.nome = 'kwid'

// carros.push(carro)

// carros.push('celta')


// let bicicleta = 'monarque'

// carros.push(bicicleta)

// bicicleta = 'oggi'






// function x (a,b){
//     if(b){
//         return a+b
//     }
// }

// let y = x
// let z = y(1,3)

// let w


// function calculaNota (pessoa){
//     let notaTotal = 100
//     let questoes = 2
    
//     if(acertou1 == true && acertou2 == true){
//         return notaTotal
//     }if((acertou1 == true && acertou2 == false) || (acertou1 == false && acertou2 == true )){
//         return notaTotal/questoes
//     }
//     if((acertou1 == false && acertou2 == false) ){
//         return  notaTotal/0
//     }
// }


// let p = {
//     acertou1: true,
//     acertou2: false
// }

// let nota = calculaNota(p)





// const pessoas = [{
//     nome: 'jessica',
//     idade: 30
// },
// {
//     nome: "valentina",
//     idade: 5
// }]

// module.exports.eDeMaior=function eDeMaior (pessoa){
//     return pessoa.idade >=18
// }


// function encontraPessoasDeMaior (pessoas){
//     let pessoasDeMaior = []
//     for(let i = 0; i<pessoas.length; i++){
//         let pessoa = pessoas[i]
//         if(eDeMaior(pessoa)){
//             pessoasDeMaior.push(pessoa)
//         }
//     }
//     return pessoasDeMaior
// }





// function soma (n1,n2){
//     return n1+n2
// }

// const soma = (n1,n2) => {
//     return n1 + n2
// }


// const soma = (n1,n2) => n1+n2
// const subtracao = (n1,n2) => n1 -n2

// function operaNumeros (fn,n1,n2){
//     return fn(n1,n2)
// }

// console.log(operaNumeros(soma,3,4))

// console.log(operaNumeros(subtracao,3,4))


// function calculaIdade (anodeNasc){
//     return 2022 - anodeNasc
// }

// console.log(calculaIdade(1991))

// let calculaIdade = (anodeNasc) => 2022- anodeNasc

// console.log(((anodeNasc) => 2022- anodeNasc)(1991))







let num = [1,2,3,4]

// for( let i=0; i<num.length; i++){
//     let numeroAtual = num[i]
//     console.log(numeroAtual)
// }






// let x = [
//     ['a', 'b', {y: ()=> 5}],
//     ['d', 'e', 'f'],
//     ['g', 'h', 'i'],
// ]

// x[0][2].y()


// function ligaAguardaEDesliga(controleRemoto) {
//     controleRemoto.liga()
//     setTimeout(()=> {
//         controleRemoto.desliga()
//     }, 10000)
// }

// const controleDaTv = {
//     liga: ()=> console.log('liguei a tv'),
//     desliga: ()=> console.log('desliguei a tv')
// }

// const controleDoAr = {
//     cor: 'branco',
//     desliga: ()=> console.log('desliguei o ar'),
//     liga: ()=> console.log('liguei o ar')
// }

// const arr = [controleDaTv, controleDoAr]

// arr.forEach(controleAtual=> {
//     ligaAguardaEDesliga(controleAtual)
// })



