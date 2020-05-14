const getDetail = require('./mocks/details');

module.exports = (req, res) => {
  res.send(getDetail(req.params.uuid));
};
