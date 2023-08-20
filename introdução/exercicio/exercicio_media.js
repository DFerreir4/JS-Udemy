/*
1 - Pode receber um ou mais valores numéricos
2 - Deve retornar um único número
3 - Deve gerar um erro se receber parametro não númerico
4 - Deve retornar 0 caso não receba nenhum parametro

função autoinvocavel - tudo que fizer dentro não vai para o escopo global*/
(function(){
    function calcularMedia(){
        let total = 0
        let qtd = arguments.length
        for(let i = 0; i < qtd; i++){
            if(typeof arguments[i] !== "number"){
                throw Error("only numbers")
            }
            total += arguments[i]
        }

        return (total / qtd) || 0
    }

    let media = calcularMedia(2,4,6)
    console.log(media)
})()