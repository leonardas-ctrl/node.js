import express from "express";
import { getAll, getCar } from "./controllers.js";
const router = express.Router();
export default router;

router.get("/", getAll);

router.get("/:car", getCar);
