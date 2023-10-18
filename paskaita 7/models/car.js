import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
    min: 1950,
    max: 2023,
  },
  make: {
    type: String,
    required: true,
    minlenght: 2,
    maxlenght: 100,
  },
  dateOfCreation: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Car", carSchema);
