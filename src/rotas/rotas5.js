const express = require('express')           //para chamar o express
const bodyParser = require('body-parser')   //para habilitar pegar o body 
const { query } = require('express')
const site = express()                      //para chamar o express para a constante site              
site.use(bodyParser.json())                 //para transformar em json o codigo
const port = 3000


let regiao = [{
    id: "1",
    nome: "Sudeste",
    estados: ["ES", "MG", "RJ", "SP"],
}, {
    id: "2",
    nome: "Sul",
    estados: ["PR", "SC", "RS"],
}]

// {
//     "id": "3",
//     "nome": "Norte",
//     "estados": ['AM', 'PA', 'AP', 'AC'],
// }


// site.get('/regiao', (req,res)=>{
//     res.send(regiao)
// })

site.get('/regiao/:id',(req, res)=>{
    let idRegiao = req.params.id
    let regiaoEncontrada = regiao.find((regiaoAtual)=>{
        if(idRegiao === regiaoAtual.id){
            return regiaoAtual
        }
    })

    res.send(regiaoEncontrada)
})

function filtraRegioes (nome, regiao, estados){
    if(nome){
        let regiaoEncontrada = regiao.filter((regiaoAtual)=>{
            return regiaoAtual.nome === nome
        })
        return regiaoEncontrada
    }
    if(estados){
        let regiaoEncontrada = regiao.filter((regiaoAtual)=>{
            return regiaoAtual.estados.includes(estados)
        })
        return regiaoEncontrada
    }
    return regiao
}

site.get('/regiao',(req, res)=>{
    let nome = req.query.nome
    let  estados = req.query.estados

    let regioesEncontradas = filtraRegioes(nome, regiao, estados)
    res.send(regioesEncontradas)
})



site.post('/regiao', (req,res)=>{
    let regiaoNova = req.body
    regiao.push(regiaoNova)

    res.send(regiao)
})

site.put('/regiao/:id',(req,res)=>{
    let idRegiao = req.params.id
    let regiaoAtualizada = req.body

    let posicaoIdEncontrado = regiao.find((regiaoAtual)=>{
        return regiaoAtual.id === idRegiao
    }) 

    let posicao = regiao.indexOf(posicaoIdEncontrado)
    regiao[posicao] = regiaoAtualizada

    res.send()
})

site.delete('/regiao/:id', (req,res)=>{
    let idRegiao = req.params.id
    let regiaoAtualizada = []

    for(let i=0; i<regiao.length; i++){
        let regiaoAtual = regiao[i]

        if(regiaoAtual.id != idRegiao ){
            regiaoAtualizada.push(regiaoAtual)
        }
    }
    regiao = regiaoAtualizada
    res.send()
})

site.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
