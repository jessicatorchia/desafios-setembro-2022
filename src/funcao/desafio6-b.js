function encontraPais (pais){
    const listaPaises = "bra,usa,can,fra,arg"

    const listaPaisesArr = listaPaises.split(",")
    let encontrou = false

    for (let i = 0; i < listaPaisesArr.length; i ++){
        
        if(listaPaisesArr[i]== pais){
            encontrou = true
        } 
    }
    return encontrou
}
console.log(encontraPais('usa'))
console.log(encontraPais('use'))






// const entrada = "usa"

// const listaPaises = "bra,usa,can,fra,arg";

// const listaPaisesAtual = listaPaises.split(",")

// for (let i = 0; i < listaPaisesAtual.length; i ++){
//     if(listaPaisesAtual[i]== entrada){
//         return console.log(entrada)
//     }
//     return console.log("Não encontrado")

// }



// console.log(listaPaisesAtual)




// function procuraPais(pais){
//     for (let i = 0; i < listaPaises.length; i ++){
//         const listaPaisesAtual = listaPaises[i]
//         const listaPaises = listaPaisesAtual.split(",")
            
//     if (pais == listaPaisesAtual[i] ){
//         return pais
//     }
//     return "Não Encontrado"
    
// }


// console.log(procuraPais("bra"))