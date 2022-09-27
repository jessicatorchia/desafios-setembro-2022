//pegar Obj e filtrar os valores que começam com a letra 'a' e jogar em um outro Obj

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

function valoresComecamA (obj){

    let arrChaves = Object.keys(obj)

    let arrValores = Object.values(obj)
    
    let obj2 = {}
    
    arrValores.forEach((valorAtual,i)=>{

        if(valorAtual[0] == 'a' || valorAtual[0] == 'A'){
            obj2[arrChaves[i]] = valorAtual
        }   
    })

    return obj2
}

console.log(valoresComecamA(pessoa1))