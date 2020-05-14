const { jwtSign } = require('../infrastructure/jwt-validation');

module.exports = (req, res) => {
  const { user, pass } = req.body;

  if (user !== 'user' || pass !== 'pass') {
    res.status(401).send({ status: 'Access Denied' });
    return;
  }

  const token = jwtSign(req.body);
  res.send({ status: 'Access Granted', Authorization: token });
};
