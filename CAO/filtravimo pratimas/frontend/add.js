const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch("http://localhost:3000", {
    method: "POST",
    body: JSON.stringify({
      name: form.name.value,
      age: form.age.value,
      type: form.type.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
});
