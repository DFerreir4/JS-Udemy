// function somar(arr){
//     let total = 0;
//     for(let i = 0; i < arr.length; i++){
//         total += arr[i]
//     }

//     return total
   
// }
// console.log(somar([1,10, 3]))

// function somar(){
//     console.log(arguments)
//     let total = 0
//     for(let i = 0; i < arguments.length; i++){
//         total += arguments[i]
//     }
//     return total
// }

// console.log(somar(1,2,3))
// console.log(somar(1,2,3,4,5,6,))
// console.log(somar(1,2,3,5,6,4,8,9))

//alterando para function declaration

const somar = function () {
    console.log(arguments)
    let total = 0
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i]
    }
    return total
}

console.log(somar(1,2,3))
console.log(somar(1,2,3,4,5,6,))
console.log(somar(1,2,3,5,6,4,8,9))
console.log(somar.name)

//O MESMO NÃO VAI ACONTECER SE TIVER UMA ARROW FUNCTION

// const somar = () => {
//     console.log(arguments)
//     let total = 0
//     for(let i = 0; i < arguments.length; i++){
//         total += arguments[i]
//     }
//     return total
// }

// console.log(somar(1,2,3))
// console.log(somar(1,2,3,4,5,6,))
// console.log(somar(1,2,3,5,6,4,8,9))