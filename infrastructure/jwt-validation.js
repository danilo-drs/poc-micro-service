const jwt = require('jsonwebtoken');

module.exports = {

  jwtValidationMiddleware: (req, res, next) => {
    if (req.path === '/login' || req.path === '/') {
      next();
      return;
    }
    try {
      const token = req.header('Authorization');
      jwt.verify(token, 'secret');
      next();
    } catch (err) {
      res.status(403).send({ status: 'Access Denied', error: err.message });
    }
  },
  jwtSign: (data) => jwt.sign(data, 'secret', { expiresIn: '1h' }),
};
