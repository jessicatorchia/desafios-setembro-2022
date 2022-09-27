//pegar Obj jogar em um novo Obj, se a ultima letra da chave for 'o' e o valor for um numero 
const pessoa1 = {
    nome:'jessica Barros torchia',
    nomeMae: 'janaina',
    nomePai: 'julio',
    sexo:'f', 
    idade: 30,
    altura: 1.65,
    peso: 62,
    manequim: 42,
    calcado: 35,
    rua: 'Anibal Couto',
    num: '56',
    bairro: 'Santa Rosa',
    cidade: 'Barra Mansa',
    corCasa: 'branca',
    cep: '27323130',
    profissao: 'aprendiz de desenvolvimento',
    escolaridade: 'Superior Completo',
    hobbie: 'bike',
    bebida: 'vinho',
    carro: 'palio',
}

const arrChaves = Object.keys(pessoa1)

const arrValores = Object.values(pessoa1)


let obj2 = {}

for(let i=0; i<arrChaves.length; i++){
    let palavraAtual = arrChaves[i]
    let x = Number(arrValores[i])
    

        if(palavraAtual[palavraAtual.length-1] == 'o' && Number.isNaN(Number(arrValores[i]))==false) {
            obj2[arrChaves[i]] = arrValores[i]
        }


}   



console.log(obj2)



