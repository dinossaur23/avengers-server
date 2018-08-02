const { Aluno } = require('../models/index');
const get = (req) => {
  return Aluno.findAll()
    .then(result => result);
};

const getById = (req) => {
  const options = parserFindOption(req);
  return Aluno.findOne(option)
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
  return Aluno.create(body)
};


module.exports = {
  get,
  getById,
  post
};
