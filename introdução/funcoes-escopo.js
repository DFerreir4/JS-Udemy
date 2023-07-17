
let n = "global"


function mostraN(){
    //n = "local" se colocar assim o valor da variavel fora da function é alterado
    let n1 = "local" //assim só é alterado o que ta no escopo
    
    if(true){
        var n2 ="dentro de if com let"
    }
    console.log(n2)
    console.log(`Valor de n  na função: ${n1}`)
    console.log(`Valor de n  na função: ${n2}`)
}

mostraN()


console.log(`Valor de n no escopo global: ${n}`)


function fnExt(){
    let n = "n local na função fnExt"
    function fnInt(){
        let n = "n local na função fnInt"
        console.log(n)
    }
    fnInt()
    console.log(n)
}

fnExt()