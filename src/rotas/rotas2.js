const express = require('express')           //para chamar o express
const bodyParser = require('body-parser')   //para habilitar pegar o body 
const site = express()                      //para chamar o express para a constante site              
site.use(bodyParser.json())                 //para transformar em json o codigo
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
}]

site.get('/pessoas', (req, res) => {               //get:pode fazer um filter, find ou trazer todo array
    res.send(pessoas)                              //filtra todo o array de obj
})


site.get('/pessoas/:id',(req,res)=>{            //faz um find (busca) busca em todo array
    let idDaPessoa = req.params.id              //precisa da requisição
    let pessoa
    for(let i = 0; i<pessoas.length; i++){
        const pessoaAtual = pessoas[i]
        if(idDaPessoa === pessoaAtual.id){
            pessoa = pessoaAtual
        }
    }
    res.send(pessoa)
})

site.delete('/pessoas/:id',(req, res)=>{               //faz um delete de um id, deleta uma pessoa atraves do find
    let idDaPessoa = req.params.id   
    let novoArr = []
    for(let i = 0; i<pessoas.length; i++){
        let pessoaAtual = pessoas[i]
        if(pessoaAtual.id != idDaPessoa){
            novoArr.push(pessoaAtual)
        }
    }
    pessoas = novoArr
    res.send()
})

site.put('/pessoas/:id',(req, res)=>{                         //atualiza um array, para isso ele faz uma busca no array obj e depois faz um 
                                                               //novo array com push com os elementos que não foram encontrados no indexOf
                                                              //tem requisição req.params e tem req.body
    let idDaPessoa = req.params.id                             // res.send()   ==> vazio    
    let pessoa = req.body

    let pessoaEncontrada = pessoas.find((pessoaAtual)=>{
        return pessoaAtual.id === idDaPessoa
    })
    
    let posicao = pessoas.indexOf(pessoaEncontrada)
    pessoas[posicao] = pessoa
    
    res.send()
})

site.post('/pessoas',(req, res)=>{                  //insere nova pessoa fazendo um push no array obj
    let pessoaNova = req.body
    pessoas.push(pessoaNova)
    res.send()
})


site.listen(port, () => {
    console.log(`Example app listening on port ${port}`)   //serve para ouvir a porta do computador
})
