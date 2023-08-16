//callback = cb

function fn(cb){
    console.log("executar ação de callback")
    console.log(typeof cb)
    typeof cb === "function" && cb()

}
//function anonima
// fn(function () {
//     console.log("função passada por parametro")
// })

//erro acontecer
function callback(){
    console.log("Função passada por parametro")
}
fn(callback)

//funções a propriedade de objeto

const obj = {
    callback
}

obj.callback()

//retornar função com outra função

function fn2(n1){
    return function(n2){
        return n1 * n2
    }
}

const funcao2 = fn2(10)
const mult = funcao2(2)

console.log(mult)

function fn3(){
    fn3.count++
    return function _fn3(){
        console.log("função rtornada por parametro")
    }
}
fn3.count = 0

const funcao3 = fn3()

const funcao3a = fn3()

const funcao3b = fn3()
funcao3()

console.log(fn3.count)