import express from "express";
import {
  deleteCommentById,
  getUsers,
  postComment,
  postUser,
} from "./controllers.js";

const router = express.Router();

router.get("/users", getUsers);

router.post("/users", postUser);

router.post("/comment/:id", postComment);

router.delete("/delete/:comment_id", deleteCommentById);

export default router;
