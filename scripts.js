const script_do_google =
  "https://script.google.com/macros/s/AKfycbwSEQh-Da5JnzYM9PC0ye5OyEbW9xktsIzKlXKOlvRUqDDBpV9wB0RN75J8lJXAUlsm/exec";
const form = document.forms["form-product"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    alert("Please fill out all required fields.");
    return;
  }

  fetch(script_do_google, {
    method: "POST",
    body: new FormData(form),
    mode: "no-cors",
  })
    .then((response) => {
      alert("DEU BOM PAPAI");
    })
    .then(() => {
      window.location.reload();
    })
    .catch((error) => {
      console.error("Error!", error.message);
    });
});
