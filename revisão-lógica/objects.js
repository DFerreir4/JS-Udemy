// const nomes = ["Daniel", "Maria", "João"]
// const idades = [null,"40","28","35"]

// console.log(nomes[0],idades[0])

//Objeto

//formal
const pessoa = new Object()
pessoa.nome = "Daniel"
pessoa.idade = "40"
console.log(pessoa)
let prop = "nome"
let id = "idade"
console.log(pessoa[prop])
console.log(pessoa.idade)
console.log(pessoa["nome"])
console.log(pessoa["idade"])
console.log(pessoa[id])
console.log("----------------------------------")

//literal

const aluno = {
    nome: "Diego",
    idade: 35,
    peso: 95.5

}

console.log(aluno)
console.log(aluno["nome"])
let peso = "peso"
console.log(aluno[peso])
console.log(aluno["peso"])
