const { Users } = require('../models/index');

const authenticate = (req) => {
  const options = parserFindOption(req);
  return Users.findOne(options)
  .then((result) => result);
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
