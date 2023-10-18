import mongoose from "mongoose";
import Services from "./models/Services.js";
import Users from "./models/Users.js";

export async function getMemberships(req, res) {
  try {
    const memberships = await Services.find();
    res.json(memberships);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function createMembership(req, res) {
  const { name, price, description, user_id } = req.body;
  try {
    const newMembership = new Services({
      name: name,
      price: price,
      description: description,
      user_id: user_id,
    });
    await newMembership.save();
    res.json(newMembership);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteMembershipById(req, res) {
  const { id } = req.params;
  try {
    const deleted = await Services.findByIdAndDelete(id);
    res.json(deleted);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getUsersByOrder(req, res) {
  const { order } = req.params;
  if (order === "asc") {
    try {
      const users = await Users.find().sort({ name: 1 });
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    try {
      const users = await Users.find().sort({ name: -1 });
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export async function createUser(req, res) {
  const { name, surname, email, service_id } = req.body;
  try {
    const newUser = await Users.create({
      name: name,
      surname: surname,
      email: email,
      service_id: service_id,
    });
    await newUser.save();
    const service = await Services.findById(service_id);
    service.user_id.push(newUser._id);
    await service.save();
    console.log(service_id);
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
