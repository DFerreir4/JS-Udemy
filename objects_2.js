const pessoa = {
    nome: "Maria",
    idade: 28,
    email: "ela@server.com"
}



for(let c in pessoa){
    console.log(`${c} `+pessoa[c])
}