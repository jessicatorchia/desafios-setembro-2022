const express = require('express')           //para chamar o express
const bodyParser = require('body-parser')   //para habilitar pegar o body 
const { query } = require('express')
const site = express()                      //para chamar o express para a constante site              
site.use(bodyParser.json())                 //para transformar em json o codigo
const port = 3000
const fs = require('fs')

// {
//     "id": "3",
//     "nome": "grey's anatomy",
//     "atores": ["Ellen Pompeo","Chandra Wilson","James Pickens Jr","Kevin McKidd"]
// }


site.get('/serie/:id', (req, res)=>{
    let seriestxt = fs.readFileSync('series.json', 'utf-8')
    let series = JSON.parse(seriestxt)
    let idSerie = req.params.id
    let serieEncontrada = series.find((serieAtual)=>{
        if(idSerie === serieAtual.id){
            return serieAtual
        }
    })

    res.send(serieEncontrada)
})

function filtraSeries (nome, atores, series){
    if(nome){
        let serieEncontrada = series.filter((serieAtual)=>{
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
    return series
}

site.get('/serie', (req, res)=>{
    let nome = req.query.nome
    let atores = req.query.atores
    let seriestxt = fs.readFileSync('series.json', 'utf-8')
    let series = JSON.parse(seriestxt)

    let serieEncontrada = filtraSeries(nome, atores, series)
    res.send(serieEncontrada)
})


site.post('/serie', (req, res)=>{
    let seriestxt = fs.readFileSync('series.json', 'utf-8')
    let series = JSON.parse(seriestxt)

    let serieNova = req.body
    series.push(serieNova)

    seriestxt = JSON.stringify(series, null, 2)
    fs.writeFileSync('series.json',seriestxt)

    res.send()
})

site.put('/serie/:id', (req, res)=>{
    let idSerie = req.params.id
    let serieAualizada = req.body

    let seriestxt = fs.readFileSync('series.json', 'utf-8')
    let series = JSON.parse(seriestxt)

    let posicaoIdEncontrado = series.find((serieAtual)=>{
        return serieAtual.id === idSerie
    })

    let posicao = series.indexOf(posicaoIdEncontrado)
    series[posicao] = serieAualizada

    res.send()
})

site.delete('/serie/:id',(req, res)=>{
    let idSerie = req.params.id
    let serieAtualizada = []

    let seriestxt = fs.readFileSync('series.json', 'utf-8')
    let series = JSON.parse(seriestxt)

    for(let i=0; i<series.length; i++){
        let serieAtual = series[i]

        if(serieAtual.id != idSerie){
            serieAtualizada.push(serieAtual)
        }
    }
    series = serieAtualizada
    res.send()
})

site.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
