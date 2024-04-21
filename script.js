window.onload = function() {
    const continueButton = document.getElementById('continueButton')
    continueButton.addEventListener('click', function(e) {
        e.preventDefault(); 
        const email = document.getElementById('emailInput').value;
        if(validateEmail(email)) {
            localStorage.setItem("emailLoop", email)
            alert("Endereço de e-mail salvo com sucesso!")
        } else {
            alert("Por favor, insira um endereço de e-mail válido!")
        }
    })
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return re.test(String(email).toLowerCase())
}


function showSavedAlert() {
    alert("Informações foram salvas com sucesso!")
}