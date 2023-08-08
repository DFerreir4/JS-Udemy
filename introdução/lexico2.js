let x = 10
x = "uma string"


let msg = 'vai receber "uma" string'
//aspas dublas e simples são a mesma coisa no js3

console.log(msg)

console.log("ola"*2)

console.log("2"*2)

//this dinamico

function teste(){
    console.log(this)
}
const teste2 = () => {
    console.log('teste2')
    console.log(this)

} 

teste()

const obj = {
    n: 1,
    teste,
    teste2
}

obj.teste2()
