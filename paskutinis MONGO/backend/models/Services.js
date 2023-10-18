import mongoose from "mongoose";

const serviceSchema = mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  user_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
  ],
});

export default mongoose.model("Services", serviceSchema);
