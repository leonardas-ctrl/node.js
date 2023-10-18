import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: {
    type: Date,
    default: Date.now,
  },
  comment: String,
});

export default mongoose.model("Comment", userSchema);
