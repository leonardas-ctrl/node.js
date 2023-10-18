import express from "express";
import routes from "./routes.js";
import cors from "cors";

const PORT = 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT} `);
});
