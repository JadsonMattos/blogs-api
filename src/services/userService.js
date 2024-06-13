const { User } = require('../models');

const createUser = ({ displayName, email, password, image }) => User
  .create({ displayName, email, password, image });

const getByEmail = (email) => User.findOne({ where: { email } });

const getByUserId = async (userId) => {
  const user = await User.findOne({ where: { id: userId }, attributes: { exclude: ['password'] } });
  return user;
};

const getUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

module.exports = {
  getByEmail,
  getByUserId,
  createUser,
  getUsers,
};