const ul = document.querySelector("#ul");

async function getCars() {
  const response = await fetch("http://localhost:3000/cars");
  try {
    if (response.ok) {
      const cars = await response.json();
      cars.forEach((element) => {
        const li = document.createElement("li");
        li.innerText = element;
        ul.append(li);
      });
    }
  } catch (error) {}
}
getCars();
