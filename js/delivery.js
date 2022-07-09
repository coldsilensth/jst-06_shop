const form = document.getElementById("delivery-form")

const inputs = document.querySelectorAll(".section-form__input")
const textarea = document.querySelector(".section-form__textarea")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let data = {
        name: inputs[0].value,
        phone:  inputs[1].value,
        address:  inputs[2].value,
        info:  textarea.value
    }

fetch('https://6108e442d71b67001763960c.mockapi.io/post', {
    method: "POST", 
    headers: { 
        'Content-Type': 'application/json;charset=utf-8' 
    }, 
    body: JSON.stringify(data)
})

    inputs[0].value = ""
    inputs[1].value = ""
    inputs[2].value = ""

    textarea.value = ""
   
})


//inputs[0].value = "" - при перезагрузке очищает формы