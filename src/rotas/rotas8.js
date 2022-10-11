const express = require('express')           //para chamar o express
const bodyParser = require('body-parser')   //para habilitar pegar o body 
const { query } = require('express')
const site = express()                      //para chamar o express para a constante site              
site.use(bodyParser.json())                 //para transformar em json o codigo
const port = 3000


let aluno = [{
    id: "1",
    nome: "Angelo",
    materias: ["Matematica", "Portugues", "Literatura"],
}, {
    id: "2",
    nome: "Bia",
    materias: ["Ciencia","Historia", "Matematica", "Literatura"],
}]

// {
//     "id": "3",
//     "nome": "Guilherme",
//     "materias": ["Portugues", "Literatura","Ciencia"]
// }


site.get('/aluno/:id', (req, res)=>{
    let idAluno = req.params.id
    let alunoEncontrado = aluno.find((alunoAtual)=>{
        if(idAluno === alunoAtual.id){
            return alunoAtual
        }
    })

    res.send(alunoEncontrado)
})

function filtraAlunos (nome, materia, aluno){
    if(nome){
        let nomeEncontrado = aluno.filter((alunoAtual)=>{
            return alunoAtual.nome === nome
        })
        return nomeEncontrado
    }
    if(materia){
        let materiaEncontrada = aluno.filter((alunoAtual)=>{
            return alunoAtual.materias.includes(materia)
        })
        return materiaEncontrada
    }
    return aluno
}

site.get('/aluno', (req, res)=>{
    let nome = req.query.nome
    let materia = req.query.materias

    let alunoEncontrado = filtraAlunos(nome, materia, aluno)
    res.send(alunoEncontrado)
})


site.post('/aluno', (req, res)=>{
    let alunoNovo = req.body
    aluno.push(alunoNovo)

    res.send(aluno)
})

site.put('/aluno/:id', (req, res)=>{
    let idAluno = req.params.id
    let alunoAtualizado = req.body

    let posicaoIdEncontrado = aluno.find((alunoAtual)=>{
        return alunoAtual.id === idAluno
    })

    let posicao = aluno.indexOf(posicaoIdEncontrado)
    aluno[posicao] = alunoAtualizado

    res.send()
})

site.delete('/aluno/:id',(req, res)=>{
    let idAluno = req.params.id
    let alunoAtualizado = []

    for(let i=0; i<aluno.length; i++){
        let alunoAtual = aluno[i]

        if(alunoAtual.id != idAluno){
            alunoAtualizado.push(alunoAtual)
        }
    }
    aluno = alunoAtualizado
    res.send()
})

site.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
