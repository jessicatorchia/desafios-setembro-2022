//recebe um nome completo (nome + sobrenome) e imprime as iniciais do Nome ex: JBT

const str = 'Jessica Barros Torchia'

let arrNome =  str.split(' ')

const transformaEmIniciais = arrNome.map((palavraAtual)=> palavraAtual.substr(0,1))

console.log(transformaEmIniciais.join(''))


/* quando a alteração em arrow function for direta, ela pode ser escrita de forma direta e deve
ser na mesma linha da função, do contrário, deve ser colocado chaves{} e continuar na linha de baixo
como uma função normal. e não precisa de return ou variaveis, será sempre retornado um array com a 
alteração do parametro determinada.
*/