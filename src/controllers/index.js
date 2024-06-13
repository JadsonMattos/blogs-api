const login = require('./login');
const createUser = require('./createUser');
const { getUsers, getByUserId } = require('./getUsers');
const createCategory = require('./createCategory');
const { getCategories } = require('./getCategories');
const { createBlogPost } = require('./createBlogPost');

module.exports = {
  login,
  createUser,
  getUsers,
  getByUserId,
  createCategory,
  getCategories,
  createBlogPost,
};