const { Op } = require('sequelize');
const { Category } = require('../models');

module.exports = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const categories = await Category.findAll({
    where: { id: { [Op.in]: categoryIds } },
  });
  if (categories.length !== categoryIds.length) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
  return next();
};