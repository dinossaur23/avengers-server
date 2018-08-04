const { Avenger } = require('../models/index');

const get = (req) => {
  return Avenger.findAll()
    .then(result => result);
};

const getById = (req) => {
  const options = parserFindOption(req);
  return Avenger.findOne(option)
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
  return Avenger.create(body)
};

const del = (req) => {
  const { id } = req.params;
  return Avenger.destroy({
    where: {
      id: id
    }
  })
  .then((result) => result);
};

module.exports = {
  get,
  getById,
  post,
  del
};
