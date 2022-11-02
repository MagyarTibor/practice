const form = document.querySelector("#form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const profile = {
    firstName: document.querySelector("#name").value,
    surname: document.querySelector("#surname").value,
    country: document.querySelector("#country").value,
    zipCode: document.querySelector("#zip").value,
    city: document.querySelector("#city").value,
    street: document.querySelector("#street").value,
    houseNumber: document.querySelector("# houseNumber").value,
    // picture: document.querySelector("#picture").value,
  };
  fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: new FormData(form),
  });
});
let firstName = document.querySelector("#name");
