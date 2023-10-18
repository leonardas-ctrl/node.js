import express from "express";
import { getTodos, deleteTodo, updateTodo, postTodo } from "./controllers.js";

const routes = express.Router();

routes.get("/todo", getTodos);

routes.delete("/todo/:id", deleteTodo);

routes.put("/todo/:id", updateTodo);
routes.post("/todo", postTodo);

export default routes;
