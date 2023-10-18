import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Person from "./Person.js";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

app.get(`/`, async (req, res) => {
  try {
    // const people = await Person.find().sort({ age: 1 }).limit(2).skip(2);

    // const people = await Person.find({
    //   $or: [{ age: 26 }, { name: "Marius" }],
    // });

    // const people = await Person.find({
    //   age: { $ne: 26 },
    // });

    const people = await Person.find(
      {
        age: { $gte: 26, $lt: 30 },
      },
      { __v: 0 }
    );
    res.json(people);
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
