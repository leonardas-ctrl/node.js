const membershipContainer = document.querySelector(".membership-container");

async function getMembershipsData() {
  const response = await fetch("http://localhost:3000/memberships");
  try {
    if (response.ok) {
      const result = await response.json();
      result.forEach((membership) => {
        getMemberships(membership);
      });
    }
  } catch (error) {
    console.log(error);
  }
}

async function getMemberships(membership) {
  const membBox = document.createElement("div");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const i = document.createElement("i");
  i.classList.add("fa-solid", "fa-trash");
  membBox.classList.add("memb-box");
  h3.textContent = membership.price + "$" + " " + membership.name;
  p.textContent = membership.description;
  i.addEventListener("click", async () => {
    const response = await fetch(
      "http://localhost:3000/membershipsdelete/" + membership._id,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      membershipContainer.innerHTML = "";
      alert("Membership deleted");
      getMembershipsData();
    }
  });
  membBox.append(h3);
  membBox.append(p);
  membBox.append(i);
  membershipContainer.append(membBox);
}

getMembershipsData();
