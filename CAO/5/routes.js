import express from "express";
import { getCar } from "./controller.js";

const router = express.Router();

router.post("/", getCar);

export default router;
