const ul = document.querySelector("ul");

async function getData() {
  const response = await fetch("http://localhost:3000");
  try {
    if (response.ok) {
      const result = await response.json();
      console.log(result);
      result.forEach((obj) => {
        const li = document.createElement("li");
        li.textContent = obj.name + " " + obj.surname;
        ul.append(li);
      });
    } else {
      console.log("shit happens");
    }
  } catch (error) {
    console.log(error);
  }
}
getData();
