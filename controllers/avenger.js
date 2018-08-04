const httpStatus = require('http-status-codes');
const service = require('../services/avenger');

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

const del = (req, res) => {
  return service.del(req)
  .then((result) => {
    if(result != 0){
      res.status(httpStatus.OK);
      res.send();
    }
    else {
      res.status(httpStatus.NOT_FOUND);
      res.send();
    }
  });
};

module.exports = {
  get,
  getById,
  post,
  del
}
