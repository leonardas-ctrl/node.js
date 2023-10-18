const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#lastName");
const emailInput = document.querySelector("#email");
const membershipInput = document.querySelector("#membership");
const form = document.querySelector("form");
form.addEventListener("submit", createUser);

async function getMemberships() {
  const response = await fetch("http://localhost:3000/memberships");
  try {
    if (response.ok) {
      const result = await response.json();
      result.forEach((membership) => {
        addMembership(membership);
      });
    }
  } catch (error) {
    console.log(error);
  }
}

function addMembership(membership) {
  const option = document.createElement("option");
  option.value = membership._id;
  option.textContent = membership.name;
  membershipInput.append(option);
}

getMemberships();

async function createUser(e) {
  e.preventDefault();
  const id = membershipInput.value;
  console.log(id);
  const response = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: nameInput.value,
      surname: surnameInput.value,
      email: emailInput.value,
      service_id: membershipInput.value,
    }),
  });
  if (response.ok) {
    nameInput.value = "";
  }
}
