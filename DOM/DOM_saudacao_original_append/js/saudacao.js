//função autoinvocavel porque esta trabalhando com browser
(function(){
    const nomeUsuario = "Diego"
    
    if(nomeUsuario){
        const topBarElemento = document.createElement("div")
        topBarElemento.className = "top-bar"
        topBarElemento.innerHTML = `<p>Olá <b>${nomeUsuario}</b> </p>`
        
        const elementoPai = document.querySelector("header.hero")
        //const elementoReferencia = document.querySelector("div.hero-content")
        
        elementoPai.insertBefore(topBarElemento,elementoPai.firstElementChild)
    }

    

})()