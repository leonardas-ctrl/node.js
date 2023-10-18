let tableBody = [];
const tBody = document.querySelector("tbody");
const filterByAge = document.querySelector("#age");

filterByAge.addEventListener("click", async (e) => {
  e.preventDefault();
  tBody.innerHTML = "";
  if (filterByAge.textContent === "Age(Asc) ↓") {
    const response = await fetch("http://localhost:3000/filter/-1");
    try {
      const data = await response.json();
      data.forEach((obj) => {
        generateTable(obj);
        console.log(obj);
      });
    } catch (error) {
      console.log(error);
    }
    filterByAge.textContent = "Age(Desc) ↑";
  } else {
    const response = await fetch("http://localhost:3000/filter/1");
    try {
      const data = await response.json();
      data.forEach((obj) => {
        generateTable(obj);
        console.log(obj);
      });
    } catch (error) {
      console.log(error);
    }
    filterByAge.textContent = "Age(Asc) ↓";
  }
});
async function getTable() {
  const response = await fetch("http://localhost:3000");
  try {
    const data = await response.json();
    data.forEach((obj) => {
      generateTable(obj);
    });
  } catch (error) {
    console.log(error);
  }
}

function generateTable(obj) {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  td1.textContent = obj.name;
  td2.textContent = obj.type;
  td3.textContent = obj.age;
  tr.append(td1, td2, td3);
  tBody.append(tr);
}

getTable();
