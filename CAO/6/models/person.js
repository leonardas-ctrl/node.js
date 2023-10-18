import mongoose from "mongoose";

const PersonSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2, maxlength: 100 },
  surname: { type: String, required: true, minlength: 2, maxlength: 100 },
  age: { type: Number, required: true, min: 1, max: 150 },
  dateOfCreation: { type: Date, default: Date.now },
});

export default mongoose.model("Person", PersonSchema);
