//transformar uma string em outra string com separador em ponto

function transformarSeparadorString (string){

    
    let stringArr = string.split("-")
      
    return stringArr.join('.')    
}

console.log(transformarSeparadorString("a-b-c-d-e-f"))


