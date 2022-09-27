// filtrar para um novo objeto todos o itens chaves e valores que os valores estiverem em maiusculo

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
    cidade: 'BARRA MANSA',
    corCasa: 'branca',
    cep: '27323130',
    profissao: 'aprendiz de desenvolvimento',
    escolaridade: 'Superior Completo',
    hobbie: 'bike',
    bebida: 'VINHO',
    carro: 'palio',
}

function filtraChaveOuValorComCaracMaiusc (obj){

    let arrChaves = Object.keys(obj)
    let arrValores = Object.values(obj)
    
    let obj2 ={}   
    
    for(let i=0; i<arrValores.length; i++){
        let x = Number(arrValores[i])
        if(arrValores[i] != Number(arrValores[i]) && arrValores[i] == arrValores[i].toUpperCase()){
            obj2[arrChaves[i]] = arrValores[i]
        }
    
    }
    return obj2
}



console.log(filtraChaveOuValorComCaracMaiusc(pessoa1))






// let arrChaves = Object.keys(pessoa1)
// let arrValores = Object.values(pessoa1)

// let obj2 ={} 

// for(let i=0; i<arrValores.length; i++){

//     for(let j = 0; j<arrValores[i].length; j++){
//         let codletraastual = arrValores[i].charCodeAt(j)
//         if(arrValores[j]length-1 == (codletraastual >=65 && codletraastual <=97)){
            
//             obj2[arrChaves[i]] = arrValores[i]
            
//         }
//     }
// }    




// console.log(obj2)





















// let arrChaves = Object.keys(pessoa1)
// let arrValores = Object.values(pessoa1)

// let obj2 ={} 

// for(let i=0; i<arrValores.length; i++){
    
//     let maiusculo = arrValores[i].toUpperCase()

//     if(arrValores[i] == maiusculo){
//         obj2[chaves[i]] = arrValores[i]
//     }

// }

// console.log(obj2)