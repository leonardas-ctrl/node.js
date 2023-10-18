import Pet from "./models/pet.js";

export async function getData(req, res) {
  try {
    const data = await Pet.find();
    res.json(data);
  } catch (error) {
    res.json({ error: error.message });
  }
}

export async function newPost(req, res) {
  try {
    const { name, type, age } = req.body;
    const newPet = new Pet({
      name,
      type,
      age,
    });
    await newPet.save();
    res.status(201).json(newPet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function filterData(req, res) {
  const num = req.params.num;
  try {
    const data = await Pet.find().sort({ age: num });
    res.json(data);
  } catch (error) {
    res.json({ error: error.message });
  }
}
