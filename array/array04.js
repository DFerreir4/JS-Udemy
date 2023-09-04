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

teste = arr.unshift(4,5,6)
console.log(teste)
console.log(arr)

console.log("--------SLICE--")
let arr2 = arr.slice(2,4)
console.log(arr2)
console.log(arr)

let arr3 = arr.splice(2,4, "hello word!")
console.log(arr)
console.log(arr3)
