import Category from "./models/categories.js";
import Products from "./models/products.js";

export async function postCategory(req, res) {
  const { title, description } = req.body;
  try {
    const category = new Category({ title, description });
    await category.save();
    res.json(category);
  } catch (error) {
    res.json({ error: error.message });
  }
}

export async function getStuff(res, req) {
  try {
    const category = await Category.find();
    res.json(category);
  } catch (error) {}
}
