// Calcule a soma dos números ímpares maior que 10 e menor que 30

const arr = [70,9,2,30,27,14,10,11,31]

let somaImpar = 0


for(let i = 0; i<arr.length; i++){
    let numeroAtual = arr[i]
    if(numeroAtual % 2 != 0 && numeroAtual > 10 && numeroAtual < 30){
        somaImpar = somaImpar + numeroAtual 
    }
}

console.log(somaImpar)

