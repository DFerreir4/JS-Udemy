let arr = [1,2,3,4]
//console.log(arr.reverse())

let j = 0;

let soma = arr.reduce( function (acumulador, atual,i,_arr) {
    console.log("i: ",i)
    console.log("j: ",j++)
    console.log("acumulador: ",acumulador, "atual: ",atual)
    return acumulador + atual
}, "")

console.log(soma)
console.log(arr)

const nomes = ["Daniel", "Maria", "Joana", "João"]
// contatos = {
//     "D": 1,
//     "M": 1,
//     "J": 2
// }

let nomesOrdem = nomes.reduce( function (nomes, nomeAtual) {

    /*
    1 - 
    nomes = {}
    nomeAtual = "Daniel" -> primeiraLetra = nomeAtual[0] = "D"
    return {D: 1}
    
    2 - 
    nomes = {D: 1}
    nomeAtual = "Maria" -> primeiraLetra = "M"
    return {D: 1, M: 1}
    
    3 - 
    nomes = {D: 1}
    nomeAtual = "Joana" -> primeiraLetra = "J"
    return {D: 1, M: 1,J:1}

    4 - 
    nomes = {D: 1}
    nomeAtual = "João" -> primeiraLetra = "J"
    return {D: 1, M: 1,J:2}
    */

    let primeiraLetra = nomeAtual[0]
    if(nomes[primeiraLetra]){
        nomes[primeiraLetra]++
    } else {
        nomes[primeiraLetra] = 1
    }

    return nomes
},{}) //primeira interação o nome do objeto vazio

console.log(nomesOrdem)

