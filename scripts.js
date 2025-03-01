const script_do_google =
  "https://script.google.com/macros/s/AKfycbxf3U4PvLwodp_Y1FrrFBIgLTV9rOcOnwv0zo8fbC2cpmEuCj38P2by_cMZTlFa6Kg/exec";
const form = document.forms["form-product"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    alert("Please fill out all required fields.");
    return;
  }

  // Cria um novo objeto FormData
  const formData = new FormData(form);

  // Converte valores numéricos com ponto para vírgula
  formData.forEach((value, key) => {
    // Verifica se o valor é um número
    if (!isNaN(value)) {
      // Substitui ponto por vírgula
      formData.set(key, value.replace('.', ','));
    }
  });

  fetch(script_do_google, {
    method: "POST",
    body: formData,
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
