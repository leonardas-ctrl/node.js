import express from "express";
import { people } from "./data.js";

const routes = express.Router();

routes.get("/", (req, res) => {
  res.json(people);
});

routes.post("/", (req, res) => {
  const { name, surname } = req.body;
  people.push({
    name,
    surname,
  });
  res.json(people);
});

export default routes;
