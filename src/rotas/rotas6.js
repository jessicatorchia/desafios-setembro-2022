const express = require('express')           //para chamar o express
const bodyParser = require('body-parser')   //para habilitar pegar o body 
const { query } = require('express')
const site = express()                      //para chamar o express para a constante site              
site.use(bodyParser.json())                 //para transformar em json o codigo
const port = 3000


let material = [{
    id: "1",
    nome: "lapis",
    cor: ["rosa", "verde", "azul", "amarelo"],
}, {
    id: "2",
    nome: "caneta",
    cor: ["preto", "vermelha", "azul"],
}]

// {
//     "id": "3",
//     "nome": "caderno",
//     "cor": ["preto", "vermelha", "azul","rosa"]
// }


site.get('material/:id', (req, res)=>{
    let idMaterial = req.params.id
    let materialEncontrado = material.find((materialAtual)=>{
        if(idMaterial === materialAtual.id){
            return materialAtual
        }
    })
    res.send(materialEncontrado)
})

function filtraMaterial (nome, cor, material){
    if(nome){
        let materialEncontrado = material.filter((materialAtual)=>{
            return materialAtual.nome === nome
        })
        return materialEncontrado
    }
    if(cor){
        let materialEncontrado = material.filter((materialAtual)=>{
            return materialAtual.cor.includes(cor)
        })
        return materialEncontrado
    }
    return material

}


site.get('/material',(req, res)=>{
    let nome = req.query.nome
    let cor = req.query.cor

    let materialEncontrado = filtraMaterial(nome, cor, material)
    res.send(materialEncontrado)
})  

site.post('/material', (req, res)=>{
    let materialNovo = req.body
    material.push(materialNovo)

    res.send(material)
})

site.put('/material/:id',(req, res)=>{
    let idMaterial = req.params.id
    let materialAtualizado = req.body

    let idEncontrado = material.find((materialAtual)=>{
        return materialAtual.id === idMaterial
    })

    let posicao =  material.indexOf(idEncontrado)
    material[posicao] = materialAtualizado

    res.send()
})

site.delete('/material/:id',(req, res)=>{
    let idMaterial = req.params.id
    let materialAtualizado = []

    for(let i=0; i< material.length; i++){
        let materialAtual = material[i]

        if(materialAtual.id != idMaterial){
            materialAtualizado.push(materialAtual)
        }
    }
    material = materialAtualizado
    res.send()
})


site.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
