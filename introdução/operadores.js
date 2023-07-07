/*

+ Adição
- Subtração
* Multiplicação
/ Divisão
% Resto da divisão
** Potência

*/

let n1 = 10
let n2 = 5
//OPERADORES ARITMÉTICOS
console.log(n1 + n2)
console.log( n1 - n2)
console.log( n1 * n2)
console.log( n1 / n2)
console.log( n1 % n2)
console.log( 2 ** 3)

//OPERADORES DE ATRIBUIÇÃO

let n3 = 20
//n3 = n3 + 15
n3 *= 2
console.log(`O valor de n3 é ${n3}`)

// INCREMENTO E DECREMENTO

let i = 0
i++
console.log(i)

/*
Comparação

 igualdade de valor ==
 igualdade de valor e tipo === 


*/


console.log(n1 == "10")
console.log(n1 === "10")
console.log(n2 < 10)
console.log(n2 <= 10)
console.log(n2 >= 11)
console.log(n2 <= 11)

console.log("testando")
console.log(n1 != "10") //false
console.log(n1 !== "10") //true

//Operadores Lógicos

/*
Para uma pessoa viajar para o exterior:
- precisa ser maior de  18 anos ou acompanhando com os pais e ter comprado o bilhete.
*/

// let idade = 18
// if(idade >= 18){
//     console.log(`esta pessoa tem a idade ${idade}! Ela pode viajar sozinha.`)
// } else {
//     console.log(`esta pessoa tem a idade ${idade}, ela só viaja acompanhada com os pais.`)
// }

let idade = 21
let paisPresentes = false
let compBilhete = false
const podeViajar = idade >= 18 || paisPresentes && compBilhete
console.log(`pode viajar: ${podeViajar}`)
