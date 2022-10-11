let email = 'jessicabt-10@'
// let email = 'j@x.'


function emailValido (email){
    let estado = 0
    

    for(let i=0; i<email.length; i++){
        let letraAtual = email[i]
        let ehFim = email.length-1 === i

        if(estado === 0){
            if(ehLetra(letraAtual)){
                estado = 1
            }else {
                return false
            }
        }
        else if(estado === 1){
            if(ehCaracter(letraAtual)){
                estado = 1
            } else if(letraAtual === '@'){
                estado = 2
            } else {
                return false
            }
        }
        else if(estado === 2){
            if(ehLetra(letraAtual)){
                estado = 3  
            } else{
                return false
            }
        }
        else if(estado === 3){
            if(ehLetra(letraAtual)){
                estado = 3
            } else if(letraAtual === '.'){
                estado = 4
            }else{
                return false
            }
        }
        else if( estado === 4){
            if(ehLetra(letraAtual) && ehFim){
                return true
                
            } else if(ehLetra(letraAtual)){
                estado = 5

            }else{
                return false
            }
        }
        else if(estado === 5){
            if(ehLetra(letraAtual) && ehFim ){
                return true
            }else if (ehLetra(letraAtual)){
                estado = 5
            }else if (letraAtual === '.'){
                estado = 4 
            }else{
                return false
            }
           
        }

    }
    return false
}

console.log(emailValido(email))





function ehLetra(entrada) {
        let codLetraAtual = entrada.charCodeAt(0)

        if (codLetraAtual >= 97 && codLetraAtual <= 122) {
            return true
        }else{
            return false
        }
}

function ehCaracter(entrada) {
        let codLetraAtual = entrada.charCodeAt(0)
        if (entrada === '-' || entrada === '_'|| (codLetraAtual >= 97 && codLetraAtual <= 122) || (codLetraAtual >= 46 && codLetraAtual <= 57)) {
            return true
        }else{
            return false
        }
}



// function emailValido (email){
//     let estado = 0

//     for(let i=0; i<email.length; i++){
//         let letraAtual = email[i]
               
//         if(estado === 0){
//             if(ehLetra(letraAtual)){
//                 estado = 1
//             }else {
//                 return false
//             }
//         }
//         else if(estado === 1){
//             if(ehCaracter(letraAtual)){
//                 estado = 1
//             } else if(letraAtual === '@'){
//                 estado = 2
//             } else {
//                 return false
//             }
//         }
//         else if(estado === 2){
//             if(ehLetra(letraAtual)){
//                 estado = 3  
//             } else{
//                 return false
//             }
//         }
//         else if(estado === 3){
//             if(ehCaracter(letraAtual) && letraAtual != '.'){
//                 estado = 3
//             } else if(letraAtual === '.'){
//                 estado = 4
//             }else{
//                 return false
//             }
//         }
//         else if( estado === 4){
//             if(ehLetra(letraAtual)){
//                 estado = 4
                
//             } else if(letraAtual === '.'){
//                 estado = 5
//             }else{
//                 return true
//             }
//         }
//         else if(estado === 5){
//             if(ehLetra(letraAtual) ){
//                 estado = 4
//             }else{
//                 return false
//             }
           
//         }
//     }
// }