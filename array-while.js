// Criar  um array com números randomicos não repetidos.

//console.log(Math.random()) função interna do js para números randomicos
//teste meu
// for(let i = 0; i <= 50; i++){
//     console.log(`${i} - `+parseInt(Math.random(i)*50))
// }

function geradorNRandom(max){
    return parseInt(Math.random()*max)
}

let arr = []

while(arr.length <= 20){
    let rndNumber = geradorNRandom(30)
    
    
    if(arr.indexOf(rndNumber) < 0){
        arr.push(rndNumber)
    } else {
        console.log(rndNumber, "Já existe no arr")
    }
}

console.log(arr)


