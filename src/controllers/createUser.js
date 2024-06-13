const { UserService } = require('../services');
const { generateToken } = require('../utils/token');

module.exports = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const user = await UserService.createUser({ displayName, email, password, image });
  const token = await generateToken(user.id);
  return res.status(201).json({ token });
};
