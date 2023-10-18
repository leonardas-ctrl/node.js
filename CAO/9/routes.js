import express from "express";
import { getStuff, postCategory } from "./controllers.js";

const router = express.Router();

router.get("/", getStuff);

router.post("/", postCategory);

export default router;
