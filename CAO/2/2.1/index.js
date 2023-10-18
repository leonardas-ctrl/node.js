import express from "express";
import cors from "cors";
const app = express();
const PORT = 3000;
app.use(cors());

const cars = ["BMW", "VW", "Porsche"];
app.get("/cars", (req, res) => {
  res.json(cars);
});

app.listen(PORT);
