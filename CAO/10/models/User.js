import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  comment_id: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

export default mongoose.model("User", userSchema);
