const httpStatus = require('http-status-codes');
const service = require('../services/users');


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

const newUser = (req, res) => {
  return service.newUser(req).then((result) => {
      res.send(result);
  }).catch((error) => res.send(error));
};

module.exports = {
  authenticate,
  newUser
}
