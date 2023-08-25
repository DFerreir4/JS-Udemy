const txtEmail = document.querySelector("input#txtEmail")
const msgFeedback = document.querySelector("div#newsletterFeedback")

function cadastrarEmail(){
    let email = txtEmail.value
    msgFeedback.innerHTML = `O email ${email} foi cadastrado com sucesso!`
    
}
    



