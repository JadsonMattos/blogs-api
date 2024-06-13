const { CategoryService } = require('../services');

const getCategories = async (_req, res) => {
  const categories = await CategoryService.getCategories();
  return res.status(200).json(categories);
};

module.exports = { getCategories };