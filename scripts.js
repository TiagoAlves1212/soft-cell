const script_do_google =
  "https://script.google.com/macros/s/AKfycbzedsZjBBMIh2GGXtocaVloJFVR-SYBi43d_Je1MROGxv34sz98YuDlg67Mg1VIktIi/exec";
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
