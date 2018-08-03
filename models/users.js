const connection = require('../database/mariadb');
const { INTEGER, STRING } = connection.Sequelize;

const schema = {
  id: {
    type: INTEGER,
    field: 'id',
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: STRING,
    field: 'name',
    allowNull: false
  },
  email: {
    type: STRING,
    field: 'email',
    allowNull: false
  },
  password: {
    type: STRING,
    field: 'password',
    allowNull: false
  }
};

const Users = connection.define('users', schema, { tableName: 'users' });
module.exports = exports = Users;
