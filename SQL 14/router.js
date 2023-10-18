import express from "express";
import {
  addPhone,
  deleteById,
  getPhoneById,
  getPhones,
  updatePhone,
} from "./controllers.js";

const router = express.Router();

router.post("/phone", addPhone);

router.get("/phone", getPhones);

router.get("/phone/:id", getPhoneById);

router.delete("/phone/:id", deleteById);

router.put("/phone/:id", updatePhone);

export default router;
