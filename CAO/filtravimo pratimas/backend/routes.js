import express from "express";
import { filterData, getData, newPost } from "./controllers.js";

const router = express.Router();

router.get("/", getData);

router.post("/", newPost);

router.get("/filter/:num", filterData);

export default router;
