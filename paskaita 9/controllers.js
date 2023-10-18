import Group from "./models/Group.js";
import Person from "./models/Person.js";
import mongoose from "mongoose";

export async function postGroups(req, res) {
  const { name, logo } = req.body;
  try {
    const groups = new Group({ name, logo });
    await groups.save();

    res.status(201).json(groups);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function createPerson(req, res) {
  const { email, password } = req.body;
  try {
    const person = new Person({ email, password });
    await person.save();
    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function addPersonToGroup(req, res) {
  const { personId, groupId } = req.params;
  try {
    const group = await Group.findById(groupId);
    const personMongoId = new mongoose.Types.ObjectId(personId);

    group.people.push(personMongoId);
    await group.save();

    const person = await Person.findById(personId);

    const groupMongoId = new mongoose.Types.ObjectId(groupId);
    person.group = groupMongoId;

    await person.save();

    person.group = res.json({ message: `added` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getGroupById(req, res) {
  const { Id } = req.params;

  try {
    const group = await Group.findById(Id).populate("people");
    res.json(group);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
