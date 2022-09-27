const a = [1,2,3,4,3,2,1]

//verificar se existe no array um número repetido de cada um dos indices



const repeticoes = {}

for (let i = 0; i < a.length; i++){
    const atual = a[i]
    if(repeticoes[atual]) {
        repeticoes[atual] = repeticoes[atual] + 1
    } else {
        repeticoes[atual] = 1
    }
}

// repeticoes = {1: 2, 2: 2, 3: 2, 4: 1}

const chaves = Object.keys(repeticoes) // ["1", "2", "3", "4"]


for(let i = 0; i < chaves.length; i++) {
    const chaveAtual = chaves[i]
    const quantasVezesRepete = repeticoes[chaveAtual]
    if(quantasVezesRepete == 1) {
        console.log(chaveAtual)
    }
}

