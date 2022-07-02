function headerModal(text){
    const modal = document.querySelector(".header-modal")
    modal.style.display = text

    document.body.style.overflowY = text == "none" ? "scroll" : "hidden"
}

