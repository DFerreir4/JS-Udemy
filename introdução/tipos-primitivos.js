// Os tipos de dados => Strings, Number(int e float) , Boolean

let minha_var = "minha string"
let minha_var2 = 'minha string'
console.log(minha_var2)

let idade = 40
let msg = "Eu possuo "+idade+" anos. (concatenação)"
let msg2 = `(Eu possuo ${idade} anos.)`

console.log(msg)

console.log(typeof msg, typeof idade , typeof minha_var)

const n1 = 10
const n2 = 1.1

console.log(`o tipo de n1 é ${typeof n1} e o seu valor é ${n1}`)
console.log(`o tipo de n2 é ${typeof n2} e o seu valor é ${n2}`)


const isValid = true
console.log(`IsValid: ${isValid}`)

//undefined, null , symbol[mais pra frent!] (ES2015)

let varTeste = null
console.log(varTeste)
console.log(typeof varTeste)
varTeste = 10
console.log(typeof varTeste, varTeste)

