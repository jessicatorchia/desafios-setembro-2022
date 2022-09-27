// inverter o array sem usar inverse (dica: usar for e posições)

const array=[5,4,3,2,1]

let arrInverso = []



for(i = (array.length - 1); i >= 0; i--){
    let numeroAtual = array[i]
    arrInverso[arrInverso.length] = numeroAtual
} 



console.log(arrInverso)


