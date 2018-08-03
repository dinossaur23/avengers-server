const { Users } = require('../models/index');

const authenticate = (req) => {
  const { body } = req;
  const options = parserFindOption(body.email);
  return Users.findOne(options)
  .then((result) => {
    if(result.password == req.password){
      return "Authenticated";
    }
    else {
      return "Not Authenticated";
    }
  });
};

const parserFindOption = (req) => {
  const email = req;
  return {
    where: {
      email: email
    }
  };
};

const newUser = (req) => {
  const { body } = req;
  return Users.create(body);
};


module.exports = {
  authenticate,
  newUser
};
