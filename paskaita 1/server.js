import express from "express";

const app = express();

app.get("/test", (req, res) => {
  res.json({
    message: "hello world",
  });
});

app.listen(3000, () => {
  console.log("server running on PORT 3000");
});
