const httpStatus = require('http-status-codes');
const service = require('../services/users');
const serviceUserhas = require('../services/user_has_avenger');


const authenticate = (req, res) => {
  return service.authenticate(req)
  .then((result) => {
    if(result == "Authenticated"){
      res.status(httpStatus.OK)
      res.send("Authenticated");
    }
    else {
      res.status(httpStatus.UNAUTHORIZED)
      res.send("Not Authenticated");
    }
  });
};

const getUserAvenger = (req, res) => {
  return serviceUserhas.getById(req)
    .then((result) => res.send(result));
}

const newUser = (req, res) => {
  return service.newUser(req).then((result) => {
      res.send(result);
  }).catch((error) => res.send(error));
};

module.exports = {
  authenticate,
  newUser,
  getUserAvenger,
}
