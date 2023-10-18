import express from "express";
import {
  addPersonToGroup,
  createPerson,
  getGroupById,
  postGroups,
} from "./controllers.js";

const router = express.Router();

router.post("/group", postGroups);

router.post("/person", createPerson);

router.put("/person/:personId/group/:groupId", addPersonToGroup);

router.get("/group/:Id", getGroupById);

export default router;
