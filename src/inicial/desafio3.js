


function timeConversion (s){
    horaArr = s.split(':')
    const hora1 = Number(horaArr[0])
    const min = Number(horaArr[1])
    const seg = Number(horaArr[2].substr(0,2))
    const ampm = horaArr[2].substr(2,2)
    
    //somar 12 em horas se for PM, do contrário não somar.
    
    function zeroAEsquerda (num){
        if(num <10){
            return "0"+num
        }else{
            return num
        }
    }
    
    let hora24H = 12 
    if (hora1 == 12  && ampm  == "PM"){
        console.log(zeroAEsquerda(hora1) + ":" + zeroAEsquerda(min) + ":" + zeroAEsquerda(seg))
    }else if (hora1 == 12  && ampm == "AM"){
        console.log(zeroAEsquerda(hora1 - hora24H ) + ":" + zeroAEsquerda(min) + ":" + zeroAEsquerda(seg))  
    }else if (hora1 >= 1 && ampm  == "PM"){
        console.log(zeroAEsquerda(hora1 + hora24H ) + ":" + zeroAEsquerda(min) + ":" + zeroAEsquerda(seg)) 
    }else{
        console.log(zeroAEsquerda(hora1) + ":" +  zeroAEsquerda(min) + ":" + zeroAEsquerda(seg))
    }
    
}


timeConversion("12:05:45PM")

timeConversion("7:05:45PM")

timeConversion("12:05:45AM")