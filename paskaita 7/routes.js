import express from "express";
import {
  createCar,
  getCars,
  getCarById,
  updateById,
  deleteById,
} from "./controllers.js";

const router = express.Router();

router.get("/cars", getCars);

router.get("/cars/:id", getCarById);

router.post("/cars", createCar);

router.put("/cars/:id", updateById);

router.delete("/cars/:id", deleteById);

export default router;
