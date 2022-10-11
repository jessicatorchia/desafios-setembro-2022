const express = require('express')           //para chamar o express
const bodyParser = require('body-parser')   //para habilitar pegar o body 
const { query } = require('express')
const site = express()                      //para chamar o express para a constante site              
site.use(bodyParser.json())                 //para transformar em json o codigo
const port = 3000


let serie = [{
    id: "1",
    nome: "friends",
    atores: ["Jennifer Aniston", "Courtney Cox", "Lisa Kudrow"],
}, {
    id: "2",
    nome: "The Office",
    atores: ["Rainn Wilson","John Krasinski", "Jenna Fischer", "Ed Helms"],
}]

// {
//     "id": "3",
//     "nome": "grey's anatomy",
//     "atores": ["Ellen Pompeo","Chandra Wilson","James Pickens Jr","Kevin McKidd"]
// }


site.get('/serie/:id', (req, res)=>{
    let idSerie = req.params.id
    let serieEncontrada = serie.find((serieAtual)=>{
        if(idSerie === serieAtual.id){
            return serieAtual
        }
    })

    res.send(serieEncontrada)
})

function filtraSeries (nome, atores, series){
    if(nome){
        let serieEncontrada = serie.filter((serieAtual)=>{
            return serieAtual.nome === nome
        })
        return serieEncontrada
    }
    if(atores){
        let serieEncontrada = series.filter((serieAtual)=>{
            return serieAtual.atores.includes(atores)
        })
        return serieEncontrada
    }
    return serie
}

site.get('/serie', (req, res)=>{
    let nome = req.query.nome
    let atores = req.query.atores

    let serieEncontrada = filtraSeries(nome, atores, serie)
    res.send(serieEncontrada)
})


site.post('/serie', (req, res)=>{
    let serieNova = req.body
    serie.push(serieNova)

    res.send(serie)
})

site.put('/serie/:id', (req, res)=>{
    let idSerie = req.params.id
    let serieAualizada = req.body

    let posicaoIdEncontrado = serie.find((serieAtual)=>{
        return serieAtual.id === idSerie
    })

    let posicao = serie.indexOf(posicaoIdEncontrado)
    serie[posicao] = serieAualizada

    res.send()
})

site.delete('/serie/:id',(req, res)=>{
    let idSerie = req.params.id
    let serieAtualizada = []

    for(let i=0; i<serie.length; i++){
        let serieAtual = serie[i]

        if(serieAtual.id != idSerie){
            serieAtualizada.push(serieAtual)
        }
    }
    serie = serieAtualizada
    res.send()
})

site.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
