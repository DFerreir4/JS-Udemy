let idade = 4
let paisPresentes = true
let compBilhete = true
const podeViajar = (idade >= 18 || paisPresentes) && compBilhete

console.log(podeViajar)

if (!compBilhete) {
    console.log("Não! não comprou bilhete!")
    
    } else {
        if(idade >= 18){
            console.log("É Maior de idade, pode viajar!")
        }else{
            console.log("Opa. É menor de idade")
        }
    }

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
    