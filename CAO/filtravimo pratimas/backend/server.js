import express from "express";
import cors from "cors";
import routes from "./routes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const app = express();
app.use(express.json());

app.use(cors());
app.use(routes);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log(`connected to DB`);
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
