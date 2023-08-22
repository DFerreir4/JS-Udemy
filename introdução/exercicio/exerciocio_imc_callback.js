/*IMC

Muito abaixo do peso 16 a 16,9 kg/m2
Abaixo do peso 17 a 18,4 kg/m2
Peso normal 18,5 a 24,9 kg/m2
Acima do peso 25 a 29,9 kg/m2
Obesidade Grau I 30 a 34,9 kg/m2
Obesidade Grau II 35 a 40 kg/m2
Obesidade Grau III maior que 40 kg/m2
*/

function calcularIMC(peso, altura, callback){
    if(peso === undefined || altura === undefined){
        throw Error("Precisa de dois parâmetros: Peso e Altura!")
    }
    let imc = peso / (altura*altura)
    if(typeof callback === "function"){
        return callback(imc)
    }
    return imc
}

function classificaIMC(imc){
    if(imc <= 16.9){
        return "Muito abaixo do peso"
    } else if(imc <= 18.4){
        return "Abaixo do peso"
    } else if(imc <= 24.9){
        return "Peso normal"
    } else if(imc <= 29.9){
        return "Acima do peso"
    } else if(imc <= 34.9){
        return "Obesidade Grau 1"
    } else if(imc <= 40){
        return "Obesidade Grau 2"
    } else {
        return "Obesidade Grau 3"
    }
}

let imc = calcularIMC(93, 1.81)
let imc2 = calcularIMC(93, 1.81,classificaIMC)

console.log(imc)
console.log(imc2)



