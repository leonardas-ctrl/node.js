const userContainer = document.querySelector(".membership-container");
const sorter = document.querySelector("#sorter");

sorter.addEventListener("click", order);

function order() {
  if (sorter.innerText === "Sort By Name:ASC") {
    sorter.innerText = "Sort By Name:DESC";
    userContainer.innerHTML = "";
    getUsers();
  } else {
    sorter.innerText = "Sort By Name:ASC";
    userContainer.innerHTML = "";
    getUsers();
  }
}
async function getUsers() {
  if (sorter.innerText === "Sort By Name:ASC") {
    const response = await fetch("http://localhost:3000/users/asc");
    try {
      if (response.ok) {
        const result = await response.json();
        result.forEach((user) => {
          getUser(user);
        });
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    const response = await fetch("http://localhost:3000/users/desc");
    try {
      if (response.ok) {
        const result = await response.json();
        result.forEach((user) => {
          getUser(user);
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
}

async function getUser(user) {
  const userBox = document.createElement("div");
  const borders = document.createElement("div");
  const nameSurname = document.createElement("div");
  const fullName = document.createElement("p");
  const email = document.createElement("p");
  const membership = document.createElement("p");
  const id = document.createElement("p");
  fullName.textContent = user.name + " " + user.surname;
  email.textContent = user.email;
  membership.textContent = user.service_id;
  id.textContent = user._id;

  userBox.classList.add("user-box");
  borders.classList.add("margin-borders");
  nameSurname.append(fullName);
  borders.append(fullName, email, membership, id);
  userBox.append(borders);
  userContainer.append(userBox);
}
getUsers();
