import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  name: String,
  type: String,
  age: Number,
});

export default mongoose.model("pet", petSchema);
