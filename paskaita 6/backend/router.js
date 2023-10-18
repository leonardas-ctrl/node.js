import express from "express";
import { addNewPerson } from "./controller.js";

const router = express.Router();

router.post("/", addNewPerson);

export default router;
