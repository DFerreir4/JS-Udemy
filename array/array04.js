let arr = [1,3,5,7,9]

let teste = arr.push(11,13,true,"Olá Mundo!")

console.log(teste)// saiu 9 porque mostra a quantidade de índices no array
console.log(arr)
console.log("-----------")
//let ultimoItem = arr.pop()
let ultimoItem = arr[arr.length - 1]
console.log(ultimoItem)
console.log(arr)

console.log("-----------")
let primeiroItem = arr.shift()
console.log(primeiroItem)
console.log(arr)