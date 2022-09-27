//compor novo obj montar segundo obj somente com os atributos do primeiro objeto  no qual o valor tenha algum caracter maiusculo

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

function filtraAtributosComCaracMaiusc (obj){

    const arrChaves = Object.keys(obj)

    const arrValores = Object.values(obj)
       
    let obj2 = {}

    for(let i = 0; i<arrValores.length; i++){
        let palavraAtual = arrValores[i]
        let chaveAtual = arrChaves[i]
        
        for(let j = 0; j<palavraAtual.length; j++){
            let codletraastual = palavraAtual.charCodeAt(j)
           
            if(codletraastual >=65 && codletraastual <=90){
    
                obj2[chaveAtual] = palavraAtual
                break          
            }
        }       
    }
    return obj2
}


console.log(filtraAtributosComCaracMaiusc(pessoa1))


