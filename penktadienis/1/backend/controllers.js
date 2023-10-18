import { v4 as uuidv4 } from "uuid";
import { todos } from "./db.js";
import Todo from "./models/todo.js";
import todo from "./models/todo.js";

export async function getTodos(req, res) {
  try {
    const todos = await Todo.find({}, { __v: 0 });
    const result = todos.map((todo) => ({
      title: todo.title,
      description: todo.description,
      id: todo._id,
    }));
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
export async function deleteTodo(req, res) {
  const { id } = req.params;

  try {
    await Todo.findByIdAndDelete(id);
    if (todo) {
      res.json({ message: `todo with id ${id} was deleted` });
    } else {
      res.status(404).json({ message: `todo with id ${id} was not found` });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

export async function updateTodo(req, res) {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const todo = await Todo.findById(id);
    if (!todo) {
      res.status(404).json({ message: `todo with id ${id} was not found` });
    } else {
      if (title) {
        todo.title = title;
      }
      if (description) {
        todo.description = description;
      }
      await todo.save();
      res.json(todo);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function postTodo(req, res) {
  const { title, description } = req.body;
  try {
    const newTodo = new Todo({
      title,
      description,
    });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
