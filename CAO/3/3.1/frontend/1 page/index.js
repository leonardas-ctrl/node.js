const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");
const submitButton = document.querySelector("button");

submitButton.addEventListener("click", async (e) => {
  e.preventDefault();
  await fetch("http://localhost:3000", {
    method: "POST",
    body: JSON.stringify({
      name: nameInput.value,
      surname: surnameInput.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
});
