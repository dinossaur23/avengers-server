const httpStatus = require('http-status-codes');
const service = require('../services/users');
const serviceUserhas = require('../services/user_has_avenger');

const authenticate = (req, res) => {
  const { body } = req;
  return service.authenticate(body.email)
  .then((result) => {
    if(body.password == result.password){
      res.status(httpStatus.OK)
      res.send({"status": "Sucess",
                "id": result.id,
                "name": result.name,
                "email": result.email
              });
    }
    else {
      res.status(httpStatus.UNAUTHORIZED)
      res.send({
        "status": "Failed"
      });
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
  getUserAvenger
}
