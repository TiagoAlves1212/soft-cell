const scriptURL = "https://script.google.com/macros/s/AKfycbwSEQh-Da5JnzYM9PC0ye5OyEbW9xktsIzKlXKOlvRUqDDBpV9wB0RN75J8lJXAUlsm/exec"
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()

    if (!form.checkValidity()) {
        alert("Please fill out all required fields.")
        return
    }

    const numberField = form["your-number"]
    if (isNaN(numberField.value) || numberField.value.trim === "") {
        alert("The 'Number' field must contain only numbers.")
        numberField.focus()
        return
    }

    fetch(scriptURL, {method: "POST", body: new FormData(form) })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok.")
        }
        alert("Thank you! Your form has been submitted successfully.")
    })
    .then(() => {
        window.location.reload()
    })
    .catch((error) => {
        console.error("Error!", error.message)
    })
})
