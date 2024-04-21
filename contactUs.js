window.onload = function() {
    document.getElementById('myForm').addEventListener('submit', function(e) {
        e.preventDefault()
        
        const firstName = document.getElementById("firstName").value
        const lastName = document.getElementById("lastName").value
        const email = document.getElementById("email").value
        const message = document.getElementById("message").value
        
        localStorage.setItem("firstName", firstName)
        localStorage.setItem("lastName", lastName)
        localStorage.setItem("email", email)
        localStorage.setItem("message", message)
        
        showSavedAlert()
    });
    
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