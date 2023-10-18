import User from "./models/User.js";
import Comment from "./models/Comments.js";
import mongoose from "mongoose";

export async function getUsers(req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function postUser(req, res) {
  const { name, email, comment_id } = req.body;
  try {
    const newUser = await User.create({
      name: name,
      email: email,
      comment_id: comment_id,
    });
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function postComment(req, res) {
  const { id } = req.params;
  const { comment } = req.body;
  try {
    const newComment = new Comment({
      comment: comment,
      user_id: new mongoose.Types.ObjectId(id),
    });
    await newComment.save();
    const user = await User.findById(id);
    user.comment_id.push(newComment._id);
    await user.save();
    res.json(newComment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteCommentById(req, res) {
  const { comment_id: id } = req.params;

  try {
    const deleted = await Comment.findByIdAndDelete(id);
    console.log(id);
    res.json(deleted);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
