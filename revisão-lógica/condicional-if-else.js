let idade = 27
let paisPresentes = false
let compBilhete = true
const podeViajar = (idade >= 18 || paisPresentes) && compBilhete

console.log(podeViajar) // resultado da comparação


let msgMaiorIdade = (idade >= 18) ? "É Maior de idade" : "É menor de 18 anos"


if (!compBilhete) {
    console.log("Não! não comprou bilhete!")
    
    } else {
        console.log(msgMaiorIdade)
    }

//let msgMaiorIdade = ""
// if(idade >= 18){
//     msgMaiorIdade = "É maior de idade"
// }else {
//     msgMaiorIdade = "É menor de 18 anos"
// } Operador ternário



let n1 = 10
let n2 = 1
let media = ( n1 + n2 ) / 2
   
    if(n1 === 0 || n2 === 0){
        console.log("REPROVADO")
    } else if(media >= 7){
            console.log("APROVADO!")
        } else {
            console.log("RECUPERAÇÃO")
        }
    

      