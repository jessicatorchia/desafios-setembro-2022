// Imprimir os ímpares
// Imprimir os pares

const arr = [7,9,2,5,7,4]



for (let i=0; i<arr.length; i++){
    let numeroAtual =arr[i]
    if( numeroAtual % 2 === 0){
        console.log((numeroAtual))
    }
}


for (let i=0; i<arr.length; i++){
    let numeroAtual =arr[i]
    if( numeroAtual % 2 != 0){
        console.log((numeroAtual))
    }
}

/*Aprendi a usar o resto da divisão por 2 para descobrir se o numero
é par ou impar, caso par: o numero % 2 (quer dizer o resto da divisão dividido por 2) e comparo o 
valor, no caso é zero, coloco o sinal de === para comparar, assim ele será par
do contrário usando o != é impar pois é a negação do par
*/