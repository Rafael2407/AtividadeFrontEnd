const form = document.getElementById("form")
const nome = document.getElementById("nome")
const email = document.getElementById("email")
const nomeErro = document.getElementById("nomeErro")
const emailErro = document.getElementById("emailErro")
const sucesso = document.getElementById("sucesso")

form.addEventListener("submit", function(e) {
e.preventDefault()

let valido = true

nomeErro.textContent = ""
emailErro.textContent = ""
sucesso.textContent = ""

if (nome.value.trim() === "") {
nomeErro.textContent = "Informe seu nome"
valido = false
}

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

if (!regexEmail.test(email.value)) {
emailErro.textContent = "Email inválido"
valido = false
}

if (valido) {
sucesso.textContent = "Formulário enviado com sucesso"
form.reset()
}
})