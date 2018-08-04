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

const del = (req) => {
  const { id } = req.params;
  return Users.destroy({
    where: {
      id: id
    }
  })
  .then((result) => result);
};

const update = (req) => {
  const { id } = req.params;
  const { name } = req.body;
  const { email } = req.body;
  const { password } = req.body;

  if(name) {
    return Users.update(
      {
        name: name
      },
      {
        where: {
          id: id
        }
      }
    )
    .then((result) => result);
  }
  else if(email) {
    return Users.update(
      {
        email: email
      },
      {
        where: {
          id: id
        }
      }
    )
    .then((result) => result);
  }
  else if(password) {
    return Users.update(
      {
        password: password
      },
      {
        where: {
          id: id
        }
      }
    )
    .then((result) => result);
  }
};

module.exports = {
  authenticate,
  newUser,
  update,
  del
};
