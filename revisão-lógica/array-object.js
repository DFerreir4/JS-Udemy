const nomes = ["Daniel","Maria", ""]

const pessoa1 = {
    nome: "Daniel",
    idade: 10,
    email: ""
}

const pessoas = [{
    nome: "Daniel",
    idade: 40

},{
    nome: "Maria",
    idade: 28

},{
    nome: "Helena",
    idade: 45
},{
    nome: "João",
    idade: 18


}]

for(let i = 0; i < pessoas.length; i++){
    console.log(`${pessoas[i].nome} possui ${pessoas[i].idade} anos`)
}