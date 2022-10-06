let numeros  = [1,2,3,3,4,2,1]


const repeticao = {}

for(i=0; i<numeros.length; i++){
    let atual = numeros[i]

    if(repeticao[atual]){
        repeticao[atual] = repeticao[atual] + 1
    }else{
        repeticao[atual] = 1
        
    }
}

let arrValor = Object.values(repeticao)
let arrChave = Object.keys(repeticao)

let unico 
for(let i=0; i<arrValor.length; i++){
    let valorAtual = arrValor[i]
    if(valorAtual === 1){
        unico = Number(arrChave[i])
    }
}

console.log(unico)



// outra forma de fazer 

function lonelyinteger(arr) {
    for (let i = 0; i < arr.length; i++) {
        let numAtual = arr[i]
        let temRepeticao = false
        for (let j = 0; j < arr.length; j++) {
            if (numAtual == arr[j] && i != j) temRepeticao = true
        }
        if (temRepeticao===false) return numAtual
    }
}
