// Converter Celsius para Celsiu Fahrenheit

// TC = 5*((TF – 32)/9)

//TF = (TC x 1,8) + 32

function transformaCelcius (TC){

    let TF = (TC * 1.8) + 32
    return TF
}



console.log(transformaCelcius(60))