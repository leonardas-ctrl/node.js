import Express from "express";

const PORT = 3001;
const app = Express();
app.use(Express.json());

const carBrands = [
  "Toyota",
  "Honda",
  "Ford",
  "Chevrolet",
  "Volkswagen",
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Nissan",
  "Hyundai",
  "Kia",
  "Subaru",
  "Mazda",
  "Lexus",
  "Jeep",
  "Tesla",
  "Volvo",
  "Porsche",
  "Ferrari",
  "Lamborghini",
];

app.get("/", (req, res) => {
  res.carBrands;
});

app.post("/", (req, res) => {
  const { brand } = req.body;
  carBrands.push(brand);
  res.json(carBrands);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
