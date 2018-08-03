const connection = require('../database/mariadb');
const { INTEGER, STRING, DATE } = connection.Sequelize;

const schema = {
  users_id: {
    type: INTEGER,
    field: 'users_id',
    primaryKey: true,
    allowNull: false
  },
  avengers_id: {
    type: INTEGER,
    field: 'avengers_id',
    primaryKey: true,
    allowNull: false
  }
};

const UserHasAvenger = connection.define('users_has_avengers', schema, { tableName: 'users_has_avengers' });
module.exports = exports = UserHasAvenger;
