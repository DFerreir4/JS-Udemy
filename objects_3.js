const produto = {
    nome: "caneta",
    qtd: 10, 
    comprar(n){
        console.log(this)
        if(n > this.qtd){
            return "Quantidade não disponível"
        }
        this.qtd -= n
    },
    teste1: function(){
        console.log("teste1")
        console.log(this)
    },
    teste2:()=>{
        console.log("teste2")
        console.log(this)
    }
}

produto.comprar(3)
//console.log(produto)

produto.comprar(13)
//console.log(produto)

produto.teste1()
produto.teste2()