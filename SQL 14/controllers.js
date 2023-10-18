import db from "./db.js";

export async function addPhone(req, res) {
  const { price, brand } = req.body;
  try {
    const { rows } = await db.query(
      `insert into phones (price, brand) values (${price}, '${brand}') returning *`
    );
    res.status(201).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getPhones(req, res) {
  const { limit, order } = req.query;
  try {
    let query = `select * from phones`;

    if (order) {
      query += ` order by price ${order}`;
    }

    if (limit) {
      query += ` limit ${limit}`;
    }
    const { rows } = await db.query(query);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getPhoneById(req, res) {
  const { id } = req.params;
  try {
    const { rows } = await db.query(`select * from phones where id = ${id}`);

    if (rows.length === 0) {
      res.status(404).json({ error: "Phone not found" });
    } else {
      res.json(rows[0]);
    }
  } catch (error) {}
}

export async function deleteById(req, res) {
  const { id } = req.params;
  try {
    const { rowCount } = await db.query(`delete from phones where id = ${id}`);
    if (rowCount === 0) {
      res.status(404).json({ error: "Phone not found" });
    } else {
      res.json({ message: `phone with id ${id} deleted` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updatePhone(req, res) {
  const { id } = req.params;
  const { price, brand } = req.body;
  try {
    const { rows } = await db.query(
      `update phones set price = ${price}, brand = '${brand}' where id = ${id} returning * `
    );
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
