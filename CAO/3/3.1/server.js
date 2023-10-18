import Express from "express";
import cors from "cors";
import routes from "./routes.js";

const PORT = 3000;
const app = Express();
app.use(cors());
app.use(Express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT} `);
});
