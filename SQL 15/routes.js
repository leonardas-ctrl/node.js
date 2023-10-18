import express from "express";
import { deleteAll, deleteById, getItems, postItem } from "./controllers.js";

const router = express.Router();

router.get("/items", getItems);

router.post("/items", postItem);

router.delete("/items/:id", deleteById);

router.delete("/deleteAll", deleteAll);

export default router;
