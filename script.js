const email = document.querySelector(".email-input")
const password = document.querySelector(".password-input")
const btn = document.querySelector(".submit-btn")
const form = document.querySelector(".form")
const tit = document.querySelector(".text")
email.style.borderRadius = "5px"
password.style.borderRadius = "5px"

let num = 3
form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(email.value)
    console.log(password.value)

    if (email.value === "aibekova@gmail.com" && password.value === "12345678") {
        email.value = ""
        password.value = ""
        tit.innerHTML = "Салам!"    } else {
        tit.style.color = "red"
        email.style.border = "2px solid green"
        password.style.border = "2px solid dreen"
        email.value = ""
        password.value = ""
        num--
        if (num === 3) {
            tit.innerHTML = "3 попытка калды"
            tit.style.color = "red"
            email.style.border = "2px solid red"
            password.style.border = "2px solid red"
            email.value = ""
            password.value = ""
        }else if (num === 2) {
            tit.innerHTML = "2 попытка калды"
            tit.style.color = "blue"
            email.style.border = "2px solid red"
            password.style.border = "2px solid red"
            email.value = ""
            password.value = ""
        }else if (num === 1) {
            tit.innerHTML = "1 попытка калды"
            tit.style.color = "purple"
            email.style.border = "2px solid red"
            password.style.border = "2px solid red"
            email.value = ""
            password.value = ""
        }else if (num === 0) {
            tit.innerHTML = "доступ закрыт"
            btn.setAttribute("disabled", "disabled")
            tit.style.color = "red"
            email.style.border = "2px solid red"
            password.style.border = "2px solid red"
            email.value = ""
            password.value = ""
        }
    }
})
