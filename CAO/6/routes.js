import express from "express";
import { addNewPerson, getPeople } from "./controllers.js";

const router = express.Router();

router.post("/people", addNewPerson);

router.get("/people", getPeople);

export default router;
