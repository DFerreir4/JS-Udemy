const arr = [1, 5 , 10 , "Olá", true]

let soNumeros = arr.some( function (elemento) {
    return typeof elemento === "number" && elemento > 20

    //retornar valores do tipo number 
})
//função every e o some retorna boleano
// a diferença é que o every se não retornar o que é pedido ele é false
// o some o valor que vim se for diferentes , sai verdadeiro

const arr1 = arr.filter(function (el, i , _arr) {
 
    return typeof el === "number"
})

const arr2 = []
arr.forEach(function(el, i , _arr){
    if(typeof el === "number"){
        console.log(el)
    }
})


console.log(arr)
console.log(arr1)


