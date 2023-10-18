import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
