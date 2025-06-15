const nameInput = document.querySelector("#input__name")

function getMessage(msg,elm) {
    const msgElm = elm.nextElementSibling
    msgElm.textContent = msg
}
function toggleMessage(bool,elm) {
    if (bool) {
        elm.parentElement.classList.remove("invalid")
        getMessage("",elm)
    } else {
        elm.parentElement.classList.add("invalid")

    }
    
}

nameInput.onchange = (e) => {
    let value = e.target.value;
    if (value.length <= 0) {
        toggleMessage(false,nameInput)
        getMessage("Vui lòng nhập tên của bạn",nameInput)
    } else {
        toggleMessage(true,nameInput)
    }
}