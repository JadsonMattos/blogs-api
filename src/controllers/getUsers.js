const { UserService } = require('../services');

const getUsers = async (_req, res) => {
  const users = await UserService.getUsers();
  return res.status(200).json(users);
};

const getByUserId = async (req, res) => {
  const { id } = req.params;
  const user = await UserService.getByUserId(id);
  if (!user) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(user);
};

module.exports = {
  getUsers,
  getByUserId,
};