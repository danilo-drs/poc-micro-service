const payload = require('./mocks/orders');

module.exports = (req, res) => {
  res.send(payload);
};
