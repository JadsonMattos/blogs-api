const { Category } = require('../models');

const createCategory = ({ name }) => {
  if (!name) {
    throw new Error('"name" is required');
  }
  const category = Category.create({ name });
  return category;
};

const getCategories = async () => {
  const categories = await Category.findAll({ attributes: ['id', 'name'] });
  return categories;
};

module.exports = {
  createCategory,
  getCategories,
};