const { UserHasAvenger } = require('../models/index');
const get = (req) => {
  return UserHasAvenger.findAll()
    .then(result => result);
};

const getById = (req) => {
  const options = parserFindOption(req);
  return UserHasAvenger.findOne(option)
  .then((result) => result);
};

const parserFindOption = (req) => {
  const { id } = req.params;
  return {
    where: {
      id: id
    }
  };
};

const post = (req) => {
  const { body } = req;
  return UserHasAvenger.create(body)
};


module.exports = {
  get,
  getById,
  post
};
