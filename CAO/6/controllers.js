import Person from "./models/person.js";
export async function addNewPerson(req, res) {
  const { name, surname, age } = req.body;
  try {
    const newPerson = new Person({
      name,
      surname,
      age,
    });
    await newPerson.save();
    res.status(202).json(newPerson);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getPeople(req, res) {
  try {
    const people = await Person.find({}, { __v: 0 });
    res.json(people);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
