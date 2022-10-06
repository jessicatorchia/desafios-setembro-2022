const express = require('express')           //para chamar o express
const bodyParser = require('body-parser')   //para habilitar pegar o body 
const { query } = require('express')
const site = express()                      //para chamar o express para a constante site              
site.use(bodyParser.json())                 //para transformar em json o codigo
const port = 3000


let comidas = [{
    id: '1',
    nome: 'macarronada',
    tipo: 'americana',
    ingredientes: ['macarrao', 'tomate', 'cebola', 'sal', 'alho'],
}, {
    id: '2',
    nome: 'lasanha',
    tipo: 'italiana',
    ingredientes: ['massa', 'tomate', 'cebola', 'sal', 'alho', 'carne', 'queijo'],
}]
// {
//     "id":"3",
//     "nome":"pizza",
//     "tipo": "portuguesa",
//     "ingredientes":[
//         "massa",
//         "tomate",
//         "presunto",
//         "queijo",
//         "azeitona",
//         "ovo",
//     ]
// }

site.get('/comidas/:id',(req, res)=>{
    let idComida = req.params.id
    let comidaEncontrada = comidas.find((comidaAtual)=>{
        if(idComida === comidaAtual.id){
            return comidaAtual
        }
    })

    res.send(comidaEncontrada)
})
function filtraComidas(comidas, tipo, ingredientes) {
   
    if (tipo) {
        let comidasEncontradas = comidas.filter((comidaAtual) => {
            return comidaAtual.tipo === tipo
        })
        return comidasEncontradas
    }
    if (ingredientes) {
        let comidasEncontradas = comidas.filter((comidaAtual) => {
            return comidaAtual.ingredientes.includes(ingredientes)
        })
        return comidasEncontradas
    }
    return comidas
}

site.get('/comidas', (req, res) => {
    // let id = req.query.id                                         // query serve para fazer pergunta na url
    // let nome = req.query.nome
    let tipo = req.query.tipo
    let ingredientes = req.query.ingredientes

    let comidasEncontradas = filtraComidas(comidas, tipo, ingredientes)
    res.send(comidasEncontradas)
})

site.post('/comidas', (req, res) => {
    let comidaNova = req.body
    comidas.push(comidaNova)

    res.send(comidas)
})

site.put('/comidas/:id', (req, res) => {
    let idComida = req.params.id
    let tarefaAtualizada = req.body

    let posicaoEncontrada = comidas.find((comidaAtual) => {
        return comidaAtual.id === idComida
    })

    let posicao = comidas.indexOf(posicaoEncontrada)
    comidas[posicao] = tarefaAtualizada

    res.send()
})

site.delete('/comidas/:id', (req, res) => {
    let idComida = req.params.id
    let novoArr = []

    for (let i = 0; i < comidas.length; i++) {
        let comidaAtual = comidas[i]
        if (comidaAtual.id != idComida) {
            novoArr.push(comidaAtual)
        }
    }
    comidas = novoArr
    res.send()
})

site.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



// if(id) {
//     let comidasEncontradas = comidas.filter((comidaAtual)=>{
//         return comidaAtual.id === 
//     })
// }