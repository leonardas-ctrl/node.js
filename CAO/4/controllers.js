import { data } from "./db.js";

export function getAll(req, res) {
  res.json(data);
}

export function getCar(req, res) {
  const car = req.params.car;
  const mapped = data.filter((data) => data.car === car);
  res.json(mapped);
}
