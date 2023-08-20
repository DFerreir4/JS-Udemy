//aprender o conceito do callback
//cb função de callback - abreviação

//FUNCTION DECLARATION

// function teste(cb){
//     console.log("Função teste")
//     console.log(cb)
//     cb()
// }

// function fn(){
//     console.log("Função anonima de callback")
// }

// teste(fn)

//EXPRESSÃO DE FUNCTION

const teste = function (cb){
    console.log("Função teste")
    console.log(cb)
    //curto circuito
    typeof cb === "function" && cb(30)
    

}

const fn = function (param){
    console.log("Função anonima de callback")
    console.log(param)
}

//fn(30)

teste(fn)



