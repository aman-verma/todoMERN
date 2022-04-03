const jwt = require('jsonwebtoken');
//const config = require('config');
//Config
const jwtSecret = require('../config/keys').secretOrKey;

module.exports = function (req, res, next) {
  // get the token from header
  const token = req.header('x-auth-token');

  //check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No Token. Unauthorization denied' });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded.user;
    next();
  } catch (err) {
    console.log(err.message);
    return res.status(401).json({ msg: 'Token is not valid' });
  }
};
