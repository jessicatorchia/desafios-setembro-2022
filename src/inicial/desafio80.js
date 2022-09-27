function fala (){
    return 'oi'
}

function late (){
    return "au"
}

function pia (){
    return 'piu'
}

function anda(){
    return "Eu Ando"
}

function voa (){
    return "Eu Voo"
}

function criadorDeSer (nome,barulhoFn,locomocaoFn){
    console.log(barulhoFn() + ', meu nome é ' + nome + ' e ' + locomocaoFn())
}

criadorDeSer('Joao', fala, anda)
criadorDeSer('Bob', late, anda)
criadorDeSer('Birdo', pia, voa)


criadorDeSer('Lolildo', function() {
    return ' miau'
}, function() {
    return 'eu ando'
})

criadorDeSer('Lolildo', () => ' miau', () => 'eu ando')

const frutas = ['🍌', '🍍', '🥜', '🥝']

const frutaEncontrada = frutas.find((frutaAtual)=> frutaAtual == '🍍')

const frutasFiltradas = frutas.filter((frutaAtual)=> frutaAtual == '🍍')

const frutasMapeadas = frutas.map((frutaAtual)=> 'vitamina de ' + frutaAtual) // vai aplicar a mesma fórmula para todos os elementos do array deixando com mesmo tamanho

const frutasReduzidas = frutas.reduce((acumulador, frutaAtual)=>{
    return acumulador + frutaAtual
}, 'mix de ') // 'mix de' é o valor inicial que em uma soma seria zero em uma multiplicação seria 1

console.log(frutaEncontrada)
console.log(frutasFiltradas)
console.log(frutasMapeadas)
console.log(frutasReduzidas)