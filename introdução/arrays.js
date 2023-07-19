//Formal
const arr = new Array()

const arr2 = new Array(
    true, 
    "Diego", 
    28, 
    new Array(
        2 , 
        4 ,
        10
        )
        )

arr[0] = "Diego"
arr[1] = 35

console.log(arr)
console.log(arr2[3][arr2[3].length - 1])

//Literal

const arr3 = ["Diego",40,[3, 6 , 9], true]

//adicionar valor
arr3[4] = "novo valor"
arr3[arr3.length] = "novo valor 2"
arr3.push("teste2")
arr3.push("a", "b","c")

console.log(arr3)
// console.log(arr3[2])
// console.log(arr3[2][1])
// console.log(arr3[6]) // teste
let n = 6
console.log(arr3[n])