import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  brand: String,
  year: Number,
  model: String,
});

const CarModel = mongoose.model("Car", carSchema);

export default CarModel;
