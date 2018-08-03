const httpStatus = require('http-status-codes');
const service = require('../services/user_has_avenger');

const get = (req, res) => {
  return service.get(req)
    .then((result) => {
      res.send(result);
    });
};

const getById = (req, res) => {
  return service.getById(req)
  .then((result) => {
    res.send(result);
  });
};

const post = (req, res) => {
  return service.post(req).then((result) => {
      res.send(result);
  }).catch((error) => res.send(error));
};

module.exports = {
  get,
  getById,
  post
}
