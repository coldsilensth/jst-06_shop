const form = document.getElementById("delivery-form") 
 
const inputs = document.querySelectorAll(".section-form__input") 
 
const textarea = document.querySelector(".section-form__textarea") 
 
const nameText = document.querySelector(".section-form__name-validation") 
 
const phoneText = document.querySelector(".section-form__phone-validation") 
 
form.addEventListener("submit", (e) => { 
    e.preventDefault() 
 
    let validationCheck = { 
        name: true, 
        phone: true 
    } 
 
    const regNameLat = /[A-Za-z]/ 
 
    const regNameKir = /[A-Яа-я]/ 
 
    const regPhone = /^[0]{1}[1-9]{1}[0-9]{8}$/ 
 
    if(regNameLat.test(inputs[0].value) || regNameKir.test(inputs[0].value)){ 
        nameText.classList.add("section-form__name-validation") 
        validationCheck.name = true 
    }else{ 
        nameText.classList.remove("section-form__name-validation") 
        validationCheck.name = false 
    } 
 
    if(regPhone.test(inputs[1].value)){ 
        phoneText.classList.add("section-form__phone-validation") 
        validationCheck.phone = true 
    }else{ 
        phoneText.classList.remove("section-form__phone-validation") 
        validationCheck.phone = false 
    } 
 
    let data = { 
        name: inputs[0].value, 
        phone: inputs[1].value, 
        address: inputs[2].value, 
        info: textarea.value 
    } 
 
    if(validationCheck.name && validationCheck.phone){ 
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
    } 
 
})