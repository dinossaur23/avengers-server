const { Users, UserHasAvenger, Avenger } = require('../models/index');
const get = (req) => {
  return UserHasAvenger.findAll()
    .then(result => result);
};

const getById = (req) => {
  const options = parserFindOption(req);
  return Users.findOne(options)
  .then((result) => result);
};

const parserFindOption = (req) => {
  const { id } = req.params;
  result = {
    where: {
      id: id
    }
  };
  result.include = [
    {
      model: UserHasAvenger,
      required: true,
      include: [
        {
          model: Avenger,
          required: true
        }
      ]
    }
  ];
  return result;
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
