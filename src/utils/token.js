const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const generateToken = (userId) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data: { userId } }, secret, jwtConfig);
  return token;
};

module.exports = { generateToken };