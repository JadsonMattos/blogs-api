const { CategoryService } = require('../services');

module.exports = async (req, res) => {
  const { name } = req.body;
  try {
    const category = await CategoryService.createCategory({ name });
    return res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
