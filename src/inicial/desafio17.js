// Recebe uma cor e imprime a proxima


const cores = ['vermelho', 'azul' ,'verde', 'amarelo', 'preto', 'branco']

let entrada = "branco"
let proxCor = 'undefined'


for (let i=0; i<cores.length; i++){
  
    if(entrada == cores[i]){
        proxCor = cores[i+1]
    
    }

}

if(proxCor === undefined){
    proxCor = "n tem prox"
}

console.log(proxCor)

/*Aprendi que posso chamar no For o prox i através de i+1, etc,
entendi que quando não salvamos o valor em uma variável o valor se perde
ele não fica atribuido a nada, mas naquele momento ele faz a operação que 
tiver de fazer.
Entendi que nesse caso posso fazer um if fora do for para q ele n faça o 
else dentro do for e repita em console todos os laços com a informação n tem prox
então eu faço outro If fora do FOR, que irá fazer o mesmo que um else, porém n vai
imprimir todas as vezes (pq eu n quero isso), dentro do FOR.
*/