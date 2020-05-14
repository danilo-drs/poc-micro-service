const { jwtSign } = require('../infrastructure/jwt-validation');

module.exports = (req, res) => {
  console.log('LoginUseCase');
  const { user, pass } = req.body;
  console.log('LoginUseCase 1');

  if (user !== 'user' || pass !== 'pass') {
    res.status(401).send({ status: 'Access Denied' });
    return;
  }
  console.log('LoginUseCase 2');

  const token = jwtSign(req.body);
  console.log('LoginUseCase 3');

  res.send({ status: 'Access Granted', Authorization: token });
};
