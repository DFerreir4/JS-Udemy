let arr = [4, 5, 10, 20, 35, 4, 5]
console.log(arr.lastIndexOf(5))
// indexOf() -> retorna o primeiro o indice do primeiro valor encontrado
// lastIndexOf() -> retorna o ultimo indice
console.log(arr.indexOf(5) > -1)
console.log(arr.includes(5))
//tras resultados boleanos

console.log(arr.find(function (el) {
    return el > 10
}))

//find() sempre encontra o primeiro elemento. Se o valor de retorno for true

console.log(arr.findIndex(function(el){
    return el > 10
}))

//retorna o indice e não o valor



