//função autoinvocavel porque esta trabalhando com browser
(function(){
    const nomeUsuario = null
    const nomeUsua = document.querySelector("div.top-bar p")

    if(nomeUsuario){
        // document.querySelector("div.top-bar").textContent = `Bem-vin     (a), ${nomeUsuario}`  
        //nomeUsua.textContent = nomeUsua.textContent + nomeUsuario
        // nomeUsua.textContent += nomeUsuario
        nomeUsua.innerHTML += `<b>${nomeUsuario}</b>`
    } else {
        nomeUsua.parentElement.style.display = "none"
    }
   
    

})()