
const express = require('express')
const bodyParser = require('body-parser')
const site = express()
site.use(bodyParser.json())
const port = 3000

let pessoas = [{
    id: '1',
    nome: "jessica",
    idade: 31,
}, {
    id: '2',
    nome: "juliana",
    idade: 8,
}, {
    id: '3',
    nome: "afonso",
    idade: 18,
},  {
    id: '4',
    nome: "ana",
    idade: 30,
}, {
    id: '5',
    nome: "bia",
    idade: 10,
}, {
    id: '6',
    nome: "carla",
    idade: 15,

}, {
    id: '7',
    nome: "carol",
    idade: 90,
}, {
    id: '8',
    nome: "antonio",
    idade: 50, 
}, {
    id: '9',
    nome: "josé",
    idade: 70,
}, {
    id: '10',
    nome: "pedro",
    idade: 20,    
}]

site.get('/pessoas', (req, res) => {
    res.send(pessoas)
})

site.get('/pessoas/:id', (req, res) => {
    let idDaPessoa = req.params.id
    let pessoa
    for (let i = 0; i < pessoas.length; i++) {
        const pessoaAtual = pessoas[i]
        if (idDaPessoa === pessoaAtual.id) {
            pessoa = pessoaAtual
        }
    }
    res.send(pessoa)
})

site.get("/pessoas/filtro/maior-de-idade", (req, res) => {
    const pessoasMaior = pessoas.filter((pessoaAtual) => {
        if (pessoaAtual.idade >= 18) {
            return true
        }
    })
    res.send(pessoasMaior)
})

site.get("/pessoas/filtro/pessoas-com-letra-j", (req, res) => {
    const pessoasComLetraJ = pessoas.filter((pessoaAtual) => {
        if (pessoaAtual.nome[0] == 'j' || pessoaAtual.nome[0] == 'J') {
            return true
        }
    })
    res.send(pessoasComLetraJ)
})

site.get("/pessoas/filtro/pessoas-nome", (req, res) => {
    let arrSaida = []
    for (let i = 0; i < pessoas.length; i++) {
               
        arrSaida.push(pessoas[i].nome)
            
    }
    res.send(arrSaida)
})

site.get("/pessoas/filtro/primeiras-5", (req, res)=>{
    let saida
    for (let i = 0; i < pessoas.length; i++) {
        saida = pessoas.slice(0,5)                 
    }
    res.send(saida)
})


site.get("/pessoas/filtro/media-idade-pessoas",(req, res)=>{
    let mediaPessoas = pessoas.reduce((acumulador,pessoaAtual)=>{
        return acumulador + pessoaAtual.idade
    },0) / pessoas.length
    res.send(mediaPessoas.toString())
})

site.get("/pessoas/filtro/nome-quantidade-letras/:quantidade",(req, res)=>{
    let quantidadeLetrasNome = Number(req.params.quantidade)
    let pessoa = []
    for (let i = 0; i < pessoas.length; i++) {
        let pessoaAtual = pessoas[i]
        if(pessoaAtual.nome.length === quantidadeLetrasNome){
            pessoa.push( pessoaAtual)
        }
    }
    res.send(pessoa)
})

site.post("/pessoas",(req, res)=>{
    let pessoa = req.body
    if(pessoa.idade>=0){
        pessoas.push(pessoa)
        res.send("ok")
    } else {
        res.send("pessoa com idade invalida")
    }
    
})



site.listen(port, () => {
    console.log(`Example app listening on port ${port}`)       
})
