const express = require('express')  
const cors = require('cors')                                              //para chamar o express
const bodyParser = require('body-parser')   //para habilitar pegar o body 
const site = express()                      //para chamar o express para a constante site              
site.use(bodyParser.json())                 //para transformar em json o codigo
const port = 3000
site.use(cors())

let tarefa = [{
    id:'1',
    nome: 'venda',
    descricao: 'venda do produto ao cliente',
    pronta: true,
},{    
    id:'2',
    nome: 'despesa',
    descricao: 'pagamentos de boletos e funcionarios',
    pronta: true,
}]

//     id:'4',
//     nome: 'receita',
//     descricao: 'recebimento de clientes',
//     pronta: false,
// },{
//     id:'5',
//     nome: 'entrega',
//     descricao: 'entrega do produto na casa do cliente',
//     pronta: true,
// }]

site.get('/tarefa',(req, res)=>{
    res.send(tarefa)
})

site.get('/tarefa/:id',(req, res)=>{            //faz uma busca
    let idTarefa = req.params.id
    let tarefaEncontrada = tarefa.find((tarefaAtual)=>{
        if(idTarefa === tarefaAtual.id){
            return tarefaAtual
        }
    })
    
    res.send(tarefaEncontrada)
})

site.post('/tarefa',(req,res)=>{
    let tarefaNova = req.body
    tarefa.push(tarefaNova)
    res.send()
})

site.put('/tarefa/:id',(req, res)=>{
    let idTarefa = req.params.id
    let tarefaAtualizada = req.body

    let tarefaEncontrada = tarefa.find((tarefaAtual)=>{
        return tarefaAtual.id === idTarefa
    })

    let posicao = tarefa.indexOf(tarefaEncontrada)
    tarefa[posicao] = tarefaAtualizada
    
    res.send()
})


site.delete('/tarefa/:id', (req, res)=>{
    let idTarefa = req.params.id
    let arrAtualizado =[]
    for(let i=0; i< tarefa.length; i++){
        let tarefaAtual = tarefa[i]
        if(tarefaAtual.id != idTarefa){
            arrAtualizado.push(tarefaAtual)
        }
    }
    tarefa = arrAtualizado
    res.send()
})

site.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
