import db from "./db.js";

export async function isServerFunctions(req, res) {
  res.json({ message: `server functions` });
}

export async function getShirtsByOrder(req, res) {
  const { order, size } = req.query;
  try {
    let query = `select * from shirts`;
    if (size) {
      query += ` where size = '${size}'`;
    }

    if (order) {
      query += ` order by price ${order}`;
    }
    console.log(query);
    const { rows } = await db.query(query);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function addShirt(req, res) {
  const { brand, model, price, size } = req.body;
  try {
    const { rows } = await db.query(
      `insert into shirts (brand, model, price, size) values ('${brand}', '${model}', ${price}, '${size}') returning *`
    );
    res.status(201).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function pageNotExists(req, res) {
  res.status(404).json({ error: "Page not found" });
}
