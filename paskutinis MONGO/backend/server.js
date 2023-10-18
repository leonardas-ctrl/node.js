import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
