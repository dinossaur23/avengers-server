const httpStatus = require('http-status-codes');
const service = require('../services/users');


const authenticate = (req, res) => {
  const { body } = req;
  return service.authenticate(body.email)
  .then((result) => {
    if(body.password == result.password){
      res.status(httpStatus.OK)
      res.send({"status": "Sucess",
                "id": result.id
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

const newUser = (req, res) => {
  return service.newUser(req).then((result) => {
      res.send(result);
  }).catch((error) => res.send(error));
};

module.exports = {
  authenticate,
  newUser
}
