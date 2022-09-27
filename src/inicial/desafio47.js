//recebe um nome completo (nome + sobrenome) e imprime as iniciais do Nome ex: JBT

const nome = 'Jessica Barros Torchia'

let arrnome = nome.split(" ")


let arrIniciais = []

for(let i = 0; i<arrnome.length; i++){
    let palavraAtual = arrnome[i]
    arrIniciais.push(palavraAtual.substr(0,1))
}

arrIniciais = arrIniciais.join('')

console.log(arrIniciais)