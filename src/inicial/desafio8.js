// Imprimir o maior número

//pegar o primeiro numero do arry e comparar com o segundo, etc e guardar o valor
//após imprimor no terminal o resultado

const arr = [7,9,2,5,7,14]

let maiorNumero = arr[0]

for( let i = 0; i<=arr.length; i++){
    const numeroAtual = arr[i]
    
    if(numeroAtual >= maiorNumero){
        maiorNumero = numeroAtual
    }
}
console.log(maiorNumero)

/*Entendi que o let é o valor que vai ser possível mudar, quando eu atribuo dentro
de um FOR é possível após o laço que ele valha outro valor, se eu colocar um const para ser
alterado em um laço, o código iria quebrar, pois constante não pode ser alterada.
logo, como o valor de maiorNumero muda fora do fOR, quando eu vou dar o console.log, eu devo dar fora 
do FOR(laço), caso eu quisesse verificar quais são os valores sendo alterado no laço, eu dou o console.log
dentro do for abaixo do que já alterou.
Existe um conceito chamado Escopo que funciona de fora para dentro, e não funciona de dentro para fora.
*/
