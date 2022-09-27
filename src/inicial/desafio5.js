// const usuarios = ["afonso:123", "jessica:456", "ana:789"]
const usuarios = {
    afonso:"123",
    jessica:"456",
    ana: "789"
}

function autorizaAcesso(nome, senha){
    const valorNoDicionario = usuarios[nome]
    if(senha == valorNoDicionario) {
        return "Pode entrar"
    }
    return "Acesso invalido"
    // for (let i = 0; i < usuarios.length; i ++){
    //     const usuarioAtual = usuarios[i]
    //     const usuarioArr = usuarioAtual.split(":")
    //     if (nome == usuarioArr[0] && senha == usuarioArr[1] ){
    //         return "Pode Entrar"
    //     }
    // }
    // return "Acesso Inválido"
}

console.log(autorizaAcesso("afonso", "123"))

// 

//     if (usuario == usuario1 && senha == senha1){
//         return "Pode Entrar"
//     }if (usuario == usuario2 && senha == senha2){
//         return "Pode Entrar"
//     }if (usuario == usuario3 && senha == senha3){
//         return "Pode Entrar"
//     }if (usuario == usuario4 && senha == senha4){
//         return "Pode Entrar"
//     }if (usuario == usuario5 && senha == senha5){
//         return "Pode Entrar"
//     }if (usuario == usuario6&& senha == senha6){
//         return "Pode Entrar"
//     }if (usuario == usuario7 && senha == senha7){
//         return "Pode Entrar"
//     }if (usuario == usuario8 && senha == senha8){
//         return "Pode Entrar"
//     }if (usuario == usuario9 && senha == senha9){
//         return "Pode Entrar"
//     }if (usuario == usuario10 && senha == senha10){
//         return "Pode Entrar"
//     }else{
//         return "Acessó Inválido"
//     }   
// }


// console.log(autoruzaAcesso("jose", "4556"))