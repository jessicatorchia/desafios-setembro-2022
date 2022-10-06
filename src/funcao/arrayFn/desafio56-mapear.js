//Receber uma palavra e montar um aray com o valor da posição do UTF-8 (usar array)

const str = ('jessica')

let arrNome = str.split('')

const devolvePosicaoUTF8 = arrNome.map((letraAtual)=>letraAtual.charCodeAt(letraAtual))

console.log(devolvePosicaoUTF8.join(','))

