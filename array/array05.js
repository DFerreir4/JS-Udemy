let arr = [1,2,3,4]
console.log(arr.reverse())

let soma = arr.reduce( function (acumulador, atual) {
    return acumulador + atual
})

console.log(soma)
