const jwt = require('jsonwebtoken');

const authenticateJWT = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    try {
      const valid = await jwt.verify(token, process.env.SECRET_KEY);

      req.user = valid;

      return next();
    } catch (err) {
      return res.sendStatus(401);
    }
  } else {
    return res.sendStatus(401);
  }
};

module.exports = authenticateJWT;
