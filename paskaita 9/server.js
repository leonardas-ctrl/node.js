import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes.js";

dotenv.config();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
