import { query } from "express";
import db from "./db.js";

export async function postItem(req, res) {
  const { title } = req.body;
  if (title) {
    try {
      const { rows } = await db.query(
        `INSERT INTO items (title) VALUES ('${title}') returning *`
      );
      res.status(201).json(rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(400).json({ error: "Missing title" });
  }
}

export async function getItems(req, res) {
  const { limit } = req.query;
  let query = `select * from items`;
  if (limit) {
    query += ` limit ${limit}`;
  }
  try {
    const { rows } = await db.query(query);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteById(req, res) {
  const { id } = req.params;

  if (id) {
    if (Number.isNaN(+id)) {
      return res.status(400).json({ error: "id must be a number" });
    }
    try {
      const { rowCount } = await db.query(`delete from items where id = ${id}`);

      if (rowCount === 0) {
        res.json({ error: `item with id ${id} not found` });
      } else {
        res.json({ message: `item with id ${id} deleted` });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(400).json({ error: "Missing id" });
  }
}

export async function deleteAll(req, res) {
  const { deleteAlId } = req.query;
  if (deleteAlId == 29214) {
    try {
      const { rowCount } = await db.query(`delete from items`);
      if (rowCount === 0) {
        res.json({ message: "bad id or no items" });
      } else {
        res.json({ message: "all items deleted" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
