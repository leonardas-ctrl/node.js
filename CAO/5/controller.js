import Car from "./models/car.js";

export async function getCar(req, res) {
  const { brand, model, year } = req.body;

  try {
    const newCar = new Car({
      brand,
      model,
      year,
    });
    await newCar.save();

    res.json(newCar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
