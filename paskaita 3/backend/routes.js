import express from "express";
import { people } from "./data.js";
const routes = express.Router();

routes.get("/", (req, res) => {
  res.json(people);
});

routes.post("/", (req, res) => {
  const { name, age, gender } = req.body;
  people.push({ name, age, gender });
  res.json(people);
});

routes.delete("/:id", (req, res) => {
  const id = req.params.id;
  const index = people.findIndex((person) => person.id == id);
  people.splice(index, 1);
  res.json({
    message: "person deleted",
  });
});

routes.put("/:id", (req, res) => {
  const id = req.params.id;
  const { name, age, gender } = req.body;
  const index = people.findIndex((person) => person.id == id);
  people[index] = {
    ...people[index],
    name,
    age,
    gender,
  };
  res.json(people);
});

export default routes;
