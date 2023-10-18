import mongoose from "mongoose";

export function validateId(req, res, next) {
  const { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id)) {
    next();
  } else {
    res.status(413).json({ error: "invalid ID" });
  }
}

export function logger(req, res, next) {
  console.log("request received");
}
