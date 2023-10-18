import express from "express";
import {
  addShirt,
  getShirtsByOrder,
  isServerFunctions,
  pageNotExists,
} from "./controllers.js";

const router = express.Router();

router.get("/shirts", getShirtsByOrder);
router.post("/shirts", addShirt);

router.get("/", isServerFunctions);
router.all("*", pageNotExists);

export default router;
