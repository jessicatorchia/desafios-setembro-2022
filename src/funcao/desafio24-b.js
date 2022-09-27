// Converter Fahrenheit para Celsius

// TC = 5*((TF – 32)/9)

//TF = (TC x 1,8) + 32

function transformaFahrenheit (TF){

    let TC = 5*((TF - 32)/9)
    return TC
}

console.log(transformaFahrenheit(86))