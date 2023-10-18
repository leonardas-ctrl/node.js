import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./router.js";

dotenv.config();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const app = express();
app.use(express.json());

app.use(router);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
