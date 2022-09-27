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

let arrChaves = Object.keys(pessoa1)

let arrValores = Object.values(pessoa1)




let obj2 = {}

for(let i=0; i<arrValores.length; i++){
   
    if(arrValores[i][0] == 'a' || arrValores[i][0] == 'A'){
        obj2[arrChaves[i]] = arrValores[i]
    }

    

    
}

/*aprendi que posso pegar uma posição do array string através dos colchetes arrValores[i][0], onde o [i] representa a possição do array e o [o]
representa a posição da string.
*/


console.log(obj2)