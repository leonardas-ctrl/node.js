const form = document.querySelector("form");
form.addEventListener("submit", addMembership);
async function addMembership(e) {
  e.preventDefault();
  const nameInput = document.querySelector("#name");
  const priceInput = document.querySelector("#price");
  const descriptionInput = document.querySelector("#description");
  const response = await fetch("http://localhost:3000/memberships", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: nameInput.value,
      price: priceInput.value,
      description: descriptionInput.value,
    }),
  });
  if (response.ok) {
    nameInput.value = "";
    priceInput.value = "";
    descriptionInput.value = "";
    alert("Membership added");
  }
}
