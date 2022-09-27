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

function criaNovoObjSeUltimaLetraChaveOValorNum (obj){

    const arrChaves = Object.keys(pessoa1)

    const arrValores = Object.values(pessoa1)    
    
    let obj2 = {}
    
    arrChaves.forEach ((palavraAtual,i)=>{

        if(palavraAtual[palavraAtual.length-1] == 'o' && Number.isNaN(Number(arrValores[i]))==false) {
            obj2[arrChaves[i]] = arrValores[i]
        }
    })

    return obj2 
}
  
console.log(criaNovoObjSeUltimaLetraChaveOValorNum(pessoa1))



