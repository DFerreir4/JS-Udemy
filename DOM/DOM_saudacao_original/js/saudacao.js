//função autoinvocavel porque esta trabalhando com browser
(function(){
    const nomeUsuario = "Diego"
   // document.querySelector("div.top-bar").textContent = `Bem-vindo(a), ${nomeUsuario}`  
    const nomeUsua = document.querySelector("div.top-bar")
    //nomeUsua.textContent = nomeUsua.textContent + nomeUsuario
    nomeUsua.textContent += nomeUsuario
    

})()