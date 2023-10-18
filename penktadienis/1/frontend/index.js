const HOST = "http://localhost:3000/todo";
const container = document.querySelector("#todoContainer");
let todos = [];
const submitForm = document.querySelector("form");
const titleInput = document.querySelector("#titleInput");
const todoInput = document.querySelector("#todoInput");

submitForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = titleInput.value;
  const description = todoInput.value;
  try {
    const response = await fetch(HOST, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      titleInput.value = "";
      todoInput.value = "";
      generateTodoHTML(data);
    } else {
      console.log("shit happens");
    }
  } catch (error) {
    console.log(error);
  }
});
async function getTodos() {
  try {
    const response = await fetch(HOST);
    if (response.ok) {
      const data = await response.json();
      todos = data;
    } else {
      console.log("shit happens");
    }
  } catch (error) {
    console.log(error);
  }
}

function generateTodoHTML(todo) {
  const todoContainer = document.createElement("div");
  const title = document.createElement("input");
  title.value = todo.title;
  const description = document.createElement("input");
  description.value = todo.description;
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.className = "deleteButton";
  deleteButton.addEventListener("click", async () => {
    if (confirm("Are you sure you want to delete?")) {
      try {
        const response = await fetch(HOST + `/${todo.id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          todoContainer.remove();
        } else {
          alert("something went wrong");
        }
      } catch (error) {
        alert(error);
      }
    }
  });

  const updateButton = document.createElement("button");
  updateButton.textContent = "update";

  updateButton.addEventListener("click", async () => {
    const titleValue = title.value;
    const descriptionValue = description.value;
    try {
      const response = await fetch(HOST + `/${todo.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: titleValue,
          description: descriptionValue,
        }),
      });
      if (response.ok) {
        console.log("ok");
      }
    } catch (error) {}
  });

  todoContainer.append(title, description, deleteButton, updateButton);
  container.append(todoContainer);
}

await getTodos();
todos.forEach((todo) => {
  generateTodoHTML(todo);
});
