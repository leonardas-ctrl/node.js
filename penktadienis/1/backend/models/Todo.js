import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 100,
    minLength: 3,
  },
  description: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 200,
  },
  dateOfCreation: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
});

export default mongoose.model("Todo", todoSchema);
