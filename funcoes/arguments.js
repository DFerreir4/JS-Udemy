// function somar(arr){
//     let total = 0;
//     for(let i = 0; i < arr.length; i++){
//         total += arr[i]
//     }

//     return total
   
// }
// console.log(somar([1,10, 3]))

function somar(){
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